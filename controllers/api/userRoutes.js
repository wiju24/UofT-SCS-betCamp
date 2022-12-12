const router = require('express').Router();
const { User } =  require('../../models');
//http://localhost:3001/api/users/
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
//http://localhost:3001/api/users/login
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

router.post('/logout', (req, res) => {
    if (req.session.logged_in) {
      req.session.destroy(() => {
        res.status(204).end();
      });
    } else {
      res.status(404).end();
    }
  });

  router.delete('/login', async (req, res) => {
    try {
      const userData = await User.destroy({
        where: {
          id: req.params.id,
        },
      });
      if (!userData) {
        res.status(404).json({ message: 'No user with this id!' });
        return;
      }
      res.status(200).json(userData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

module.exports = router;
