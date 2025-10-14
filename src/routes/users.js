const express = require('express');
const {registerUser, loginUser} = require('../controllers/users')
const router = express.Router();
const passport = require('passport')
const {validateSignup , validateLogin , validate} = require('../utils/validators')

//@route POST /register 
router.post('/register' ,validateSignup, validate, registerUser)

router.post('/login' ,  validateLogin , validate,  passport.authenticate('local'),loginUser )

module.exports = router
