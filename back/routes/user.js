const express = require('express');
// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');
const User = require('../models/user');
const passport = require('passport');
const router = express.Router();
require('../models/user');

router.get('/', (req, res) => {
    res.send('Bienvenidos');
});

router.get('/api/login', (req, res) => {
    res.redirect('/login');
});

router.post('/api/login', passport.authenticate('local', {
    successRedirect: '/api/productos',
    failureRedirect: '/login',
}));

router.get('/api/register', (req, res) => {
    res.redirect('/register');
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