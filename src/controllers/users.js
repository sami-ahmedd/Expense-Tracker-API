
const userModel = require('../models/users')
const {matchedData} = require('express-validator');
const {hashPassword , comparePassword } = require('../utils/helpers')

const registerUser = async (request , response)=>{
    const data = matchedData(request)
    data.password = hashPassword(data.password)
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