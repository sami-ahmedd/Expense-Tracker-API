
const userModel = require('../models/users')
const {  validationResult, matchedData} = require('express-validator');

const registerUser = async (request , response)=>{
    const data = matchedData(request)
    try {
        const user = await userModel.create(data) 
        return response.status(201).send(user)
    } catch (error) {
        return response.sendStatus(400)
    }
}

const loginUser = async (request , response ) =>{
    response.status(200).send({msg : 'logged in succesfully'});
}

module.exports = {registerUser , loginUser};