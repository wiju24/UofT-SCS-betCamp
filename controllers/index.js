const router = require('express').Router();
const userRoutes = require('./userRoutes');
const routes = require('./routes');
const apiRoutes = require('./apiRoutes');

// require api routes

router.use('/', routes);  //     /
router.use('/users',  userRoutes);
router.use('/api', apiRoutes)

module.exports = router;
