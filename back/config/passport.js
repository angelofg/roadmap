const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/user');

//Configurar estrategia local
passport.use(new LocalStrategy({
    usernameField: 'username'
}, async (username, password, done) => {
    const user = await User.findOne({username: username});
   
    if(!user){
        return done(null, false,  {message: 'Not User found.' }); // Usuario autenticado
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
    done(null, user.id);
});

passport.deserializeUser((id, done) =>{
    User.findById(id)
    .then(user=>{
        done(null, user);
    })
    .catch(err => {
        done(err, null);
    });
});

// passport.deserializeUser(async(id, done) => {
//    await User.find(id, (err, user) => {
//         done(err, user);
//     });
// });