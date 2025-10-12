//
//
const createExpense = (request,response) => {
    response.send({message : 'create expense'})
}

//@dest get all expenses
//@route GET /api/expenses
const getAllExpenses =  (request,response) => {
    response.send('all the expenses you have made');
};

//@dest update expense with id
//@route PATCH /api/expenses/:id
const updateExpense = (request,response) => {
    const {body , params : {id}} = request;
    response.send({message : `updating expense with id : ${id}`})
}

//
//
const deleteExpense =  (request,response) => {
    const {params : {id}} = request;
    response.send({message : `deleting expense with id : ${id}`});
}

module.exports = {getAllExpenses , updateExpense , createExpense , deleteExpense};