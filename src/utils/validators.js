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
        .isLength({min : 4 , max : 20}).withMessage('username must be between 4-20 characters')
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

const validateLogin = [
    body('username')
        .trim()
        .escape()
        .notEmpty()
        .withMessage('Username is required')
        .isLength({ min: 3 })
        .withMessage('Username must be minimum 3 letters long'),

    body('password')
        .trim()
        .notEmpty()
        .withMessage('Password is required')
];

const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ msg: errors.array()[0].msg });
  }
  next();
};

module.exports = {validateCreateExpense , validateSignup , validateLogin , validate }