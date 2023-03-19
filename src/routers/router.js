const express = require('express');
const mainController = require('../controllers/mainController');
const userAuthController = require('../controllers/authController');

const router = express.Router();

//Pour gerer la route homePage
router.get('/', mainController.homePage );
router.post('/', mainController.addVote);

//Pour gerer la route du signup
router.get('/signup', mainController.homePage);
router.post('/signup', userAuthController.handleSignUpForm);




module.exports = router;