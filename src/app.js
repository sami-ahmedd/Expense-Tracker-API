const express  = require('express');
const dotenv =require('dotenv').config();
const mongoose = require('mongoose');

const app = express();

mongoose.connect(process.env.MONGO_URI )
    .then(() => console.log('connected to database'))
    .catch((err) => console.log(err))

const port = process.env.PORT || 3000;

app.get('/', (request , response) => response.send('Home page'));


app.listen(port ,()=>  console.log(`listening on port $`));