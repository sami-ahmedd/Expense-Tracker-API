const mongoose = require('mongoose');
const {CATEGORIES} = require('../constants/categories');
const { request } = require('express');

const expenseSchema = new mongoose.Schema({
    user_id : {
        type : mongoose.Schema.Types.ObjectId , 
        required : true,
        ref : 'userModel'
    },
    expenseName : {
        type : String, 
        required : [true, 'must provide expense name'] ,
        trim : true
    },
    amount : {
        type : Number,
        required : [true, 'must provide Amount'],
        trim : true
    } , 
    category : {
        type : String , 
        required : true , 
        enum : {
            values : CATEGORIES,
            message : "{VALUE} is not a valid category"
        }
    } , 
    date : {
        type : Date ,
        default : Date.now
    }
})

const expenseModel = mongoose.model('expenseModel' , expenseSchema)

module.exports = {expenseModel}