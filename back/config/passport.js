const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/user');

//Configurar estrategia local
passport.use(new LocalStrategy({
    usernameField: 'username'
}, async (username, password, done) => {
    const user = await User.findOne({username: username});
   
    if(!user){
        return done(null, false,  {message: 'Not User found.' }); 
    } else {
        const match = await user.matchPassword(password);
        if(match){
            return done(null, user);
        }else{
            return done(null, false, {message: 'Incorrect Password'});
        }
    }
}));

//Serializacion y deserializacion de usuarios
passport.serializeUser((user, done) => {
    console.log('serializando usuario: ', user);
    done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
    const user = await User.findById(id);
    console.log('deserializando usuario: ',user);
    done(null, user);
});
