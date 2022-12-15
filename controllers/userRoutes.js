const router = require('express').Router();
const {User} =  require('../models');
const withAuth = require('../utils/authent');

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

router.post('/api/users',  async (req, res) => {
    try {
        const  userInfo = await User.findOne({ where: { email: req.body.email }});
        
        console.log(userInfo)
        if (!userInfo) {
            res
            .status(400)
            .json({ message: 'Email or password is incorrect! Try Again!'});
            return;
        }
        const  rightPass = userInfo.checkPassword(req.body.password);



console.log(rightPass)
        
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

  router.get('/', async (req, res) => {
    try {
      // Get all projects and JOIN with user data
      const projectData = await User.findAll({
        include: [
          {
            model: User,
            attributes: ['name'],
          },
        ],
      });
  
      // Serialize data so the template can read it
      const projects = projectData.map((project) => project.get({ plain: true }));
  
      // Pass serialized data and session flag into template
      res.render('/home', { 
        projects, 
        logged_in: req.session.logged_in 
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
// router.get('/users', async (req, res) => {
// try {
//     const projectData = await User.findByPk(req.params.id, {
//     include: [
//         {
//         model: User,
//         attributes: ['name'],
//         },
//     ],
//     });

//     const project = projectData.get({ plain: true });

//     res.render('project', {
//     ...project,
//     logged_in: req.session.logged_in
//     });
// } catch (err) {
//     res.status(500).json(err);
// }
// });

// // Use withAuth middleware to prevent access to route
// router.get('/profile', withAuth, async (req, res) => {
// try {
//     // Find the logged in user based on the session ID
//     const userData = await User.findByPk(req.session.user_id, {
//     attributes: { exclude: ['password'] },
//     include: [{ model: Project }],
//     });

//     const user = userData.get({ plain: true });

//     res.render('profile', {
//     ...user,
//     logged_in: true
//     });
// } catch (err) {
//     res.status(500).json(err);
// }
// });

// router.get('/login', (req, res) => {
// // If the user is already logged in, redirect the request to another route
// if (req.session.logged_in) {
//     res.redirect('/profile');
//     return;
// }

// res.render('login');
// });



module.exports = router;
