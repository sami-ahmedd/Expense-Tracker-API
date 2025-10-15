
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

const loginUser =  (request , response ) =>{
    response.status(200).send({msg : 'logged in succesfully'});
}

const logOutUser = (request , response) =>{
    if (!request.user) return response.sendStatus(401);
    request.logout((err) => {
        if (err) return response.sendStatus(400);
        response.sendStatus(200);
    })
}

const userStatus = (request,response ) => {
    return request.user ? response.send(request.user) : response.sendStatus(401)
}

module.exports = {registerUser , loginUser , logOutUser , userStatus};