const router = require('express').Router();
const userRoute = require('./userRoutes');
const routes = require('./routes');

router.use('/routes', routes);
router.use('/users',  userRoute);

module.exports = router;
