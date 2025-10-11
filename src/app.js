const express  = require('express');
const dotenv =require('dotenv').config();


const app = express();

const port = process.env.PORT || 3000;

app.get('/', (request , response) => response.send('Home page'));


app.listen(port ,()=>  console.log(`listening on port $`));