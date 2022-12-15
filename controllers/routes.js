const router = require('express').Router();
const User = require('../models/User');
const withAuth = require('../utils/authent');
const path = require('path');

router.get('/login', (req,res) => { 
    res.sendFile(path.join(__dirname, '../public/index.html'));
});
router.get('/signup', (req,res) => {
    res.sendFile(path.join(__dirname, '../public/html/signup.html'));
});
router.get('/home', (req,res) => {
    res.sendFile(path.join(__dirname, '../public/html/home.html'));
});
router.get('/hi-low', (req,res) => {
    res.sendFile(path.join(__dirname, '../public/html/hi-low.html'));
});
router.get('/blackjack', (req,res) => {
    res.sendFile(path.join(__dirname, '../public/html/blackjack.html'));
});
router.get('/live-odd', (req,res) => {
    res.sendFile(path.join(__dirname, '../public/html/live-odd.html'));
})

module.exports = router

