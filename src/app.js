const express  = require('express');
require('dotenv').config();
const mongoose = require('mongoose');
const expensesRouter = require('./routes/expenses')
const session = require('express-session')
const app = express();

app.use(express.json());

app.use(session({
    secret : 'keyboard cat dog',
    resave : false,
    saveUninitialized : false, 
    cookie : {
        secure : true , 
        maxAge : 60000 * 60 * 60
    }
}));

app.use()

app.use(expensesRouter);


const port = process.env.PORT || 3000;


mongoose.connect(process.env.MONGO_URI )
    .then(() => {
        console.log('connected to database');
        app.listen(port , () => console.log(`server is running on port ${port}`))
    } )
    .catch((err) => console.log(err))