// const router = require('express').Router();
// const { User } = require('../models/User');
// const withAuth = require('../utils/authent');
// //CRUDE operators
const path = require('path');


module.exports = (app) => {
    app.get('./login', (req,res) => {
        res.sendFile(path.join(__dirname, '../views/login.html'));
    });
    app.get('./signup', (req,res) => {
        res.sendFile(path.join(__dirname, '../views/signup.html'));
    });
    app.get('./home', (req,res) => {
        res.sendFile(path.join(__dirname, '../views/home.html'));
    });
    app.get('./hi-low', (req,res) => {
        res.sendFile(path.join(__dirname, '../views/hi-low.html'));
    });
    app.get('./blackjack', (req,res) => {
        res.sendFile(path.join(__dirname, '../views/blackjack.html'));
    });
    app.get('./live-odd', (req,res) => {
        res.sendFile(path.join(__dirname, '../views/live-odd.html'));
    })
}

