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

//Pour gerer la route dde la connexion d'un utilisateur
router.get('/login', mainController.homePage);
router.post('/login', userAuthController.handleLoginForm);

router.get('/logout', userAuthController.logoutAndRedirect);





module.exports = router;