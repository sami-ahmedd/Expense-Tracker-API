const express  = require('express');
require('dotenv').config();
const mongoose = require('mongoose');
const expensesRouter = require('./routes/expenses')
const userRouter  = require('./routes/users')
const session = require('express-session');
const passport = require('passport');
const notFound = require('./utils/not-found');
require('./utils/local-strategy')
const app = express();

app.use(express.json());

app.use(session({
    secret : 'keyboard cat dog',
    resave : false,
    saveUninitialized : false, 
    cookie : {
        maxAge : 60000 * 60 * 60
    }
}));

app.get('/' , (request,response) => {
    response.send('home page')
})

app.use(passport.initialize());
app.use(passport.session());

app.use(expensesRouter);
app.use(userRouter)

app.use(notFound)


const port = process.env.PORT || 3000;


mongoose.connect(process.env.MONGO_URI )
    .then(() => {
        console.log('connected to database');
        app.listen(port , () => console.log(`server is running on port ${port}`))
    } )
    .catch((err) => console.log(err))