const { body , query , param , validationResult} = require('express-validator');
const {CATEGORIES} =require('../constants/categories')

const validateCreateExpense = [
    body('expenseName')
        .trim()
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

const validateSignup = [
    body('username')
        .isLength({min : 4 , max : 20}).withMessage('must be between 4-20 characters')
        .trim()
        .notEmpty().withMessage('usernamename cannot be blank')
        .isString().withMessage('username name must be a string') ,
    body('password')
        .notEmpty().withMessage('password cannot be blank')
        .trim()
        .isStrongPassword({
        minLength: 8,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1,
        })
        .withMessage('Password must be at least 8 characters long and contain at least one lowercase letter, one uppercase letter, one number, and one symbol.'),
    body('email')
        .notEmpty().withMessage('email cannot be left empty')
        .isEmail().withMessage('please enter valid email adress')
]

module.exports = {validateCreateExpense , validateSignup }