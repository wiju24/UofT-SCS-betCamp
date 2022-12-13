const router = require('express').Router();
const path = require('path');
const User = require('../models/User');
const withAuth = require('../utils/authent');


router.get('/users', async (req,res) => {
    // let data = await User.findAll({}); 
    // res.json(data)
    let data = {user:'bob'}
    res.json(data)

}) 

 /// /api/addBalance
router.get('/addBalance', async (req,res) => {
    let balance = req.body.balance;
    // let data = await User.findAll({}); 
    // res.json(data)
    let data = {user:'bob'}
    res.json(data)

}) 

router.post('/', async (req, res) => {

        res.send(req.body.name)
})

router.put('/', async (req, res) => {

})

router.delete('/:id', async (req, res) => {
    try {
      const userInfo = await User.destroy({
        where: {
          id: req.params.id,
          user_id: req.session.user_id,
        },
      });
  
      if (!userInfo) {
        res.status(404).json({ message: 'No account found with this id!' });
        return;
      }
  
      res.status(200).json(userInfo);
    } catch (err) {
      res.status(500).json(err);
    }
  });

router.get('/', async (req, res) => {

})


module.exports=router


//HTML, CSS, JS (90% done -- just need to touch up)

//Mysql (Verify Creating and adding to database) -- what do we have is accurate and what we think its doing? Ask what more needs to be added? 

//API for live odd -- what needs fetched from the api? How to display after logging in?

//How can we link to account balance?

//

