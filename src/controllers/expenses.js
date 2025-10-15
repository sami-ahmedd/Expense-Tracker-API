const {  validationResult} = require('express-validator');
const {expenseModel} = require('../models/expenseModel')


//@desc create new expense
//@route POST /api/expenses
const createExpense = async (request,response) => {
    const errors = validationResult(request)
    if (!errors.isEmpty())
        return response.status(400).send({msg :errors.array()[0].msg})
    try {
        request.body.user_id = request.user._id ;
        const expense = await expenseModel.create(request.body);
        response.status(200).send({expense})
    } catch (error) {
        response.status(500).send({msg : error})
    }
}

//@desc get expenses
//@route GET /api/expenses
const getExpenses = async (request,response) => {

    try {
        const {query : {filter}} = request ;
        if(!filter){
        const allExpenses = await expenseModel.find({user_id : request.user.id})
        return response.status(200).send({allExpenses})
        }
    
    let startDate;
    const today = new Date();

    switch (filter) {
    case "last-week":
        startDate = new Date();
        startDate.setDate(today.getDate() - 7);
        break;

    case "last-month":
        startDate = new Date();
        startDate.setDate(today.getDate() - 30);
        break;

    case "last-3-months":
        startDate = new Date();
        startDate.setDate(today.getDate() - 90);
        break;

    default:
        startDate = null;
        break;
    }
    if (!startDate) {
        return response.status(400).send({ msg: "Invalid filter" });
    }

    if (startDate) {
    const expenses = await expenseModel.find({
        date: { $gte: startDate },
    });
    return response.status(200).send(expenses);
    }
    } catch (error) {
         response.status(500).send({msg : error.message})
    }
};

//@desc update expense with id
//@route PATCH /api/expenses/:id
const updateExpense = async (req, res) => {
    const { body, params: { id } } = req;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).send({ msg: errors.array()[0].msg });
    }

    try {
        const updatedExpense = await expenseModel.findOneAndUpdate(
            { _id: id, user_id: req.user._id }, 
            body,
            { new: true } // return the updated document
        );

        if (!updatedExpense) {
            return res.status(404).send({ msg: 'Expense not found or you do not have permission' });
        }

        res.status(200).send({ msg: 'Expense updated', updatedExpense });
    } catch (error) {
        res.status(500).send({ msg: error.message });
    }
};


//@desc update expense with id
//@route PATCH /api/expenses/:id
const deleteExpense = async (req, res) => {
    try {
        const { params: { id } } = req;
        const deletedExpense = await expenseModel.findOneAndDelete({
            _id: id,
            user_id: req.user._id
        });

        if (!deletedExpense) {
            return res.status(404).send({ msg: `Expense not found or not yours` });
        }

        res.status(200).send({ msg: 'Expense deleted', deletedExpense });
    } catch (error) {
        res.status(500).send({ msg: error.message });
    }
};

module.exports = {getExpenses , updateExpense , createExpense , deleteExpense};