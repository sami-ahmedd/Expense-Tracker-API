const { body } = require('express-validator');
const {expenseModel} = require('../models/expenseModel')
//@desc create new expense
//@route POST /api/expenses
const createExpense = async (request,response) => {
    
    try {
        const expense = await expenseModel.create(request.body);
        response.status(200).send({expense})
    } catch (error) {
        response.status(500).send({msg : error})
    }
}

//@desc get all expenses
//@route GET /api/expenses
const getAllExpenses = async (request,response) => {
    try {
        const allExpenses = await expenseModel.find()
        response.status(200).send({allExpenses})
    } catch (error) {
         response.status(500).send({msg : error})
    }
};

//@desc update expense with id
//@route PATCH /api/expenses/:id
const updateExpense = async (request,response) => {
    const {body , params : {id}} = request;
    const findExpense = await expenseModel.findByIdAndUpdate(id,body)
    response.status(200).send({findExpense})

}

//@desc update expense with id
//@route PATCH /api/expenses/:id
const deleteExpense =  async (request,response) => {
    try {
        const {params : {id}} = request;
        const deletedExpense = await expenseModel.findByIdAndDelete(id);
        if(!deletedExpense){
            return response.status(404).send({msg: `no task with id ${id}`})
        }
        response.status(200).send({deletedExpense})
    } catch (error) {
        response.status(500).send({msg: error})
    }
}

module.exports = {getAllExpenses , updateExpense , createExpense , deleteExpense};