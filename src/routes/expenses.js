const express = require('express')
const router = express.Router();
const {getExpenses,updateExpense,createExpense, deleteExpense} = require('../controllers/expenses')

router.post('/api/expenses' , createExpense)

router.get('/api/expenses' ,getExpenses )

router.patch('/api/expenses/:id' , updateExpense)

router.delete('/api/expenses/:id' , deleteExpense)

module.exports = router