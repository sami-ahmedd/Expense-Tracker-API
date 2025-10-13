const express = require('express')
const router = express.Router();
const {getExpenses,updateExpense,createExpense, deleteExpense} = require('../controllers/expenses')
const { validateCreateExpense} = require('../utils/validators')

router.post('/api/expenses' ,validateCreateExpense ,createExpense)

router.get('/api/expenses' ,getExpenses )

router.patch('/api/expenses/:id' ,updateExpense)

router.delete('/api/expenses/:id' , deleteExpense)

module.exports = router