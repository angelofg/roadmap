const express = require('express');
const passport = require('passport');
const cors = require('cors'); 
const session = require('express-session');
const bodyParser = require('body-parser');


//Initializations
const app = express();
require('./database');
require('./config/passport');

//Middlewares
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));


//Configuracion de la sesion
app.use(session({
    secret: 'blackangel', 
    resave: false, 
    saveUninitialized: false 
}));

//Inicializar Passport
app.use(passport.initialize());
app.use(passport.session());

//Routes
app.use(require('./routes/productos'));
app.use(require('./routes/user'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`); 
});

