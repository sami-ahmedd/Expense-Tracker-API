
const userModel = require('../models/users')

const registerUser = async (request , response)=>{
    const user = await userModel.create(request.body)
    response.status(201).send({user})
}

const loginUser = async (request , response ) =>{
    response.sendStatus(200);
}

module.exports = {registerUser , loginUser};