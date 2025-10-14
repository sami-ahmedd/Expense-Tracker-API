const mongoose = require('mongoose');
mongoose.schemas
let userSchema = new mongoose.Schema({
    username : {
        type : String ,
        required  : [true, 'must provide username']  ,
        unique : [true , 'username already exists , please try another one']
    },
    password : {
        type : String ,
        required : [true, 'must provide password'] 
    },
    email : {
        type : String ,
        required : true ['must provide email'] , 
    }
})

let userModel = mongoose.model('userModel' , userSchema );
module.exports = userModel