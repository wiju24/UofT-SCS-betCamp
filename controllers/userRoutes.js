const router = require('express').Router();
const { User } =  require('../models');

router.post('/', async (req, res) => {
    try {
        const userInfo = await User.create(req.body);
        req.session.save(()=> {
            req.session.user_id = userInfo.id;
            req.session.logged_in =  true;
            res.status(200).json(userInfo);  
        });
    } catch (err) {
        res.status(400).json(err);

    }
});

router.post('/login',  async (req, res) => {
    try {
        const  userInfo = await User.findOne({ where: { email: req.body.email }});
        
        if (!userInfo) {
            res
            .status(400)
            .json({ message: 'Incorrect email or password, please try again'});
            return;
        }
        const  rightPass = await userInfo.checkPassword(req.body.password);
        
        if (!rightPass) {
            res
            .status(400)
            .json({ message: 'Incorrect email or password, please try again'});
            return;
        }
        req.session.save(() => {
            req.session.user_id = userInfo.id;
            req.session.logged_in = true;
            
            res.json({ user: userInfo, message: 'You are now logged in!' });
          });
    } catch (err) {
        res.status(400).json(err);
    }
});


module.exports = router;
