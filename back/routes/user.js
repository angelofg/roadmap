const express = require('express');
// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');
const User = require('../models/user');
const passport = require('passport');
const router = express.Router();
require('../models/user');

router.get('/', (req, res) => {
    res.send('Bienvenidos');
    req.flash('success_msg', 'Bienvenido a la pagina');
});

router.get('/api/login', (req, res) => {
    req.flash('success_msg', 'Bienvenido a la pagina');
    res.redirect('http://localhost:5173/login');
});

router.post('/api/login', passport.authenticate('local', {
    successRedirect: 'http://localhost:5173/manager',
    failureRedirect: 'http://localhost:5173/login',
    failureFlash: true
}));

router.get('/api/register', (req, res) => {
    res.redirect('http://localhost:5173/register');
});

router.post('/api/register', async (req, res) => {
    const { username, password } = req.body;
    try{
        const userData = {
            username: username,
            password: password
        }
        const newUser = new User(userData);
        newUser.password = await newUser.encryptPassword(userData.password)
        await newUser.save();
        return res.status(201).send("Registro Completado.");
    } catch (err) {
        console.log(err);
        return res.status(400).send(err);
    }
});

module.exports = router;