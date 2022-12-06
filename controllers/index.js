const router = require('express').Router();
const userRoute = require('./userRoute');
const routes = require('./routes');

router.use('/routes', routes);
router.use('/users',  userRoute);

module.exports = router;
