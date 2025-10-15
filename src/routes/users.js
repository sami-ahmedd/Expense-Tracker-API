const express = require('express');
const {registerUser, loginUser , logOutUser, userStatus} = require('../controllers/users')
const router = express.Router();
const passport = require('passport')
const {validateSignup , validateLogin , validate} = require('../utils/validators')

//@route POST /register 
router.post('/register' ,validateSignup, validate, registerUser)

router.post('/login' ,  validateLogin , validate,  passport.authenticate('local'),loginUser )

router.get('/logout' ,logOutUser);

router.get('/user/status', userStatus)

module.exports = router
