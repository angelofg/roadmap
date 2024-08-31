const express = require('express');
const cors = require('cors'); 

//Initializations
const app = express();
require('./database');


//Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Routes
app.use(require('./routes/productos'));
app.use(require('./routes/user'));

//Server is listennig
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`); 
});

