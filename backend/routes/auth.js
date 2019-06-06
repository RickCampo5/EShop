const router = require('express').Router();
const User = require('../models/User');
const passport = require('passport');

//multer config 
const multer = require('multer');
const upload = multer({dest: './public/assets'});

router.get('/logout', (req,res,next) => {
  req.logout();
  res.send('cerrado');
});

router.post('/login', (req,res,next) => {
  req.app.locals.user = req.user;
  res.json(req.user);
});

router.post('/signup', (req,res,next) => {
  User.regiter(req.body, req.body.password)
  .then(user => {
    res.json(user)
  })
  .catch(e => next(e));
});