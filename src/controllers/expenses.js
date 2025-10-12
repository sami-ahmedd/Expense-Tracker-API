const { body } = require('express-validator');
const {expenseModel} = require('../models/expenseModel')
//@desc create new expense
//@route POST /api/expenses
const createExpense = async (request,response) => {
    const {body} = request
    const expense = await expenseModel.create(body);
    response.status(201).send({expense})
}

//@desc get all expenses
//@route GET /api/expenses
const getAllExpenses =  (request,response) => {
    response.send('all the expenses you have made');
};

//@desc update expense with id
//@route PATCH /api/expenses/:id
const updateExpense = (request,response) => {
    const {body , params : {id}} = request;
    response.send({message : `updating expense with id : ${id}`})
}

//@desc update expense with id
//@route PATCH /api/expenses/:id
const deleteExpense =  (request,response) => {
    const {params : {id}} = request;
    response.send({message : `deleting expense with id : ${id}`});
}

module.exports = {getAllExpenses , updateExpense , createExpense , deleteExpense};