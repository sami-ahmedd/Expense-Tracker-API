
const userModel = require('../models/users')
const {  validationResult, matchedData} = require('express-validator');

const registerUser = async (request , response)=>{
    const errors = validationResult(request)
    if(!errors.isEmpty()) 
         return response.status(400).send({msg :errors.array()[0].msg});
    const data = matchedData(request)
    try {
        const user = await userModel.create(data) 
        return response.status(201).send(user)
    } catch (error) {
        return response.sendStatus(400)
    }
}

const loginUser = async (request , response ) =>{
    response.sendStatus(200);
}

module.exports = {registerUser , loginUser};