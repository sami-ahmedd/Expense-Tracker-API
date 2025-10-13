const { body , query , param , validationResult} = require('express-validator');
const {expenseModel} = require('../models/expenseModel')
const {validateCreateExpense} = require('../utils/validators')

//@desc create new expense
//@route POST /api/expenses
const createExpense = async (request,response) => {
    const errors = validationResult(request)
    if (!errors.isEmpty())
        return response.status(400).send({msg :errors.array()[0].msg})
    try {
        const expense = await expenseModel.create(request.body);
        response.status(200).send({expense})
    } catch (error) {
        response.status(500).send({msg : error})
    }
}

//@desc get all expenses
//@route GET /api/expenses
const getExpenses = async (request,response) => {

    try {
        const {query : {filter}} = request ;
        if(!filter){
        const allExpenses = await expenseModel.find()
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
const updateExpense = async (request,response) => {
    const {body , params : {id}} = request;
    const errors = validationResult(request)
    if (!errors.isEmpty())
        return response.status(400).send({msg :errors.array()[0].msg})
    try {
        const findExpense = await expenseModel.findByIdAndUpdate(id,body)
        if(!findExpense){
            return response.status(404).send({msg: `no task with id ${id}`})
        }
        response.status(200).send({findExpense})
    } catch (error) {
        response.status(500).send({msg: error})
    }

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

module.exports = {getExpenses , updateExpense , createExpense , deleteExpense};