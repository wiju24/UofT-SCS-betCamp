const router = require('express').Router();
const {User} =  require('../models/');

router.post('/', async (req, res) => {
    try {
        const userInfo = await User.create(req.body);
        req.session.save(()=> {
            // req.session.user_id = userInfo.id;
            req.session.name = userInfo.id;
            req.session.email = userInfo;
            req.session.password = userInfo;
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
            .json({ message: 'Email or password is incorrect! Try Again!'});
            return;
        }
        const  rightPass = await userInfo.checkPassword(req.body.password);
        
        if (!rightPass) {
            res
            .status(400)
            .json({ message: 'Email or password is incorrect! Try Again!'});
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

router.post('/logout', (req, res) => {
    if (req.session.logged_in) {
      req.session.destroy(() => {
        res.status(204).end();
      });
    } else {
      res.status(404).end();
    }
  });



module.exports = router;
