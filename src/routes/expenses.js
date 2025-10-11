const express = require('express')
const router = express.Router();

router.post('/api/expenses' , (request,response) => {
    response.send({message : 'create expense'})
})

router.get('/api/expenses' , (request,response) => {
    response.send('all the expenses youve made');
})

router.patch('/api/expenses/:id' , (request,response) => {
    const {body , params : {id}} = request;
    response.send({message : `updating expense with id : ${id}`})
})

router.delete('/api/expenses/:id' , (request,response) => {
    const {params : {id}} = request;
    response.send({message : `deleting expense with id : ${id}`});
})

module.exports = router