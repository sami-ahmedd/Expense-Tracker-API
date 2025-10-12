const express = require('express')
const router = express.Router();
const {getAllExpenses,updateExpense,createExpense, deleteExpense} = require('../controllers/expenses')

router.post('/api/expenses' , createExpense)

router.get('/api/expenses' ,getAllExpenses )

router.patch('/api/expenses/:id' , updateExpense)

router.delete('/api/expenses/:id' , deleteExpense)

module.exports = router