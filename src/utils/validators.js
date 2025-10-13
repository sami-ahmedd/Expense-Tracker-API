const { body , query , param , validationResult} = require('express-validator');
const {CATEGORIES} =require('../constants/categories')

const validateCreateExpense = [
    body('expenseName')
        .notEmpty().withMessage('expense name cannot be blank')
        .isString().withMessage('expense name must be a string'),
    body('amount')
        .notEmpty().withMessage('amount cannot be blank')
        .isInt().withMessage('amount must be a number'),
    body('category')
        .notEmpty().withMessage('category cannot be left empty')
        .isString().withMessage('must be a string')
        .isIn(CATEGORIES).withMessage('must be part of the given categories')
]



module.exports = {validateCreateExpense}