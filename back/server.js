const express = require('express');
const passport = require('passport');
const cors = require('cors'); 
const session = require('express-session');
const bodyParser = require('body-parser');
const flash = require('connect-flash');


//Initializations
const app = express();
require('./database');
require('./config/passport');

//Configuracion de la sesion
app.use(session({
    secret: 'blackangel', 
    cookie: {maxAge : 60000},
    resave: false, 
    saveUninitialized: false
}));

//Inicializar Passport
app.use(passport.initialize());
app.use(passport.session());

//Middlewares
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(flash());

//Global Variables
app.use((req, res, next) => {
    res.locals.mensajes = req.flash();
    // res.locals.success_msg = req.flash('success_msg');
    // res.locals.error_msg = req.flash('error_msg');
    next();
}); 

//Routes
app.use(require('./routes/productos'));
app.use(require('./routes/user'));

//Server is listennig
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`); 
});

