const express = require('express');
const {registerUser, loginUser} = require('../controllers/users')
const router = express.Router();
const passport = require('passport')

//@route POST /register
router.post('/register' ,registerUser)

router.post('/login' , passport.authenticate('local') , loginUser )

module.exports = router
