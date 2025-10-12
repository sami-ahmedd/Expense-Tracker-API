const express  = require('express');
require('dotenv').config();
const mongoose = require('mongoose');
const expensesRouter = require('./routes/expenses')

const app = express();

app.use(express.json());
app.use(expensesRouter);


const port = process.env.PORT || 3000;

app.get('/', (request , response) => response.send('Home page'));

mongoose.connect(process.env.MONGO_URI )
    .then(() => {
        console.log('connected to database');
        app.listen(port , () => console.log(`server is running on port ${port}`))
    } )
    .catch((err) => console.log(err))