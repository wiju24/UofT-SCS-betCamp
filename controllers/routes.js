const router = require('express').Router();
const { User } = require('../models/User');
const withAuth = require('../utils/authent');
// //CRUDE operators
const path = require('path');

router.get('/login', (req,res) => {  // /login
    res.sendFile(path.join(__dirname, ''));
});
router.get('/signup', (req,res) => {
    res.sendFile(path.join(__dirname, '../views/signup.html'));
});
router.get('/home', (req,res) => {
    res.sendFile(path.join(__dirname, '../views/home.html'));
});
router.get('/hi-low', (req,res) => {
    res.sendFile(path.join(__dirname, '../views/hi-low.html'));
});
router.get('/blackjack', (req,res) => {
    res.sendFile(path.join(__dirname, '../views/blackjack.html'));
});
router.get('/live-odd', (req,res) => {
    res.sendFile(path.join(__dirname, '../views/live-odd.html'));
})

module.exports = router

