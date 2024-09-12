const express = require('express');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Bienvenidos');
});

router.get('/api/login', (req, res) => {
    res.redirect('http://localhost:5173/login');
});

router.post('/api/login', async (req, res) => {
    const { user } = req.body;

    const username = user.username;
    const password = user.password;

    const usuario = await User.findOne({username});
    if(!usuario){
        return res.status(400).send('Usuario no encontrado');
    }
    const match = await usuario.matchPassword(password);
    if(!match){
        return res.status(400).send('Contraseña incorrecta');
    }

    const token = jwt.sign({ userId: username._id }, process.env.JWT_SECRET || 'secret', { expiresIn: '1h' });
    res.json({ token });

});

router.get('/api/register', (req, res) => {
    res.redirect('http://localhost:5173/register');
});

router.post('/api/register', async (req, res) => {
    const { user } = req.body;
    try{
        const userData = {
            username: user.username,
            password: user.password
        }
        const newUser = new User(userData);
        newUser.password = await newUser.encryptPassword(userData.password)
        await newUser.save();
        return res.status(201).send("Registro Exitoso!");
    } catch (err) {
        console.log(err);
        return res.status(400).send(err);
    }
});

router.get("/api/logout", function(req, res){
    res.send('Sesion cerrada');
});

module.exports = router;