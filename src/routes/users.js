const express = require('express');
const {registerUser, loginUser} = require('../controllers/users')
const router = express.Router();
const passport = require('passport')
const {validateSignup} = require('../utils/validators')

//@route POST /register
router.post('/register' ,validateSignup,registerUser)

router.post('/login' , passport.authenticate('local') , loginUser )

module.exports = router
