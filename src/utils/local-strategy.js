const passport = require('passport');
const localStrategy = require('passport-local').Strategy;
const userModel = require('../models/users');

passport.serializeUser((user , done) =>{
    done(null,user.id)
})

passport.deserializeUser(async (id, done) => {
    try {
        const findUser = userModel.findById(id);
        if(!findUser) throw new Error('user not found');
        done(null,findUser)
    } catch (error) {
        done(error,null)
    }
    
})

passport.use(
    new localStrategy(async (username , password , done) => {
    try {
        const findUser = await userModel.findOne({username})
        if (!findUser) throw new Error('user not found');
        if(findUser.password != password ) throw new Error('invalid credentials');
        done(null,findUser)
    } catch (error) {
        done (error , null)
    }
}))

