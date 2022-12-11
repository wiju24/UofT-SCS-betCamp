const router = require('express').Router();
const { User } = require('../../models/User');
const withAuth = require('../../utils/authent');
//CRUDE operators

module.exports = router