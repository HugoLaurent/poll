const express = require('express');
const mainController = require('../controllers/mainController');
const pollController = require('../controllers/pollController');
const userAuthController = require('../controllers/authController');
const adminController = require('../controllers/adminController');


const isAdmin = require('../middlewares/isAdmin');



const router = express.Router();

//Route pour gerer la route homePage
router.get('/', mainController.homePage );
router.post('/', mainController.addVote);

//Route pour gerer la route du signup
router.get('/signup', mainController.homePage);
router.post('/signup', userAuthController.handleSignUpForm);

//Route pour gerer la route dde la connexion d'un utilisateur
router.get('/login', mainController.homePage);
router.post('/login', userAuthController.handleLoginForm);

//Route pour polls
router.get('/polls', mainController.pollPage);

//Route pour create Poll
router.get('/create', mainController.homePage);
router.post('/create', pollController.createPoll);

//Route pour les members
router.get('/member', mainController.memberPage);


//Route pour les admins
router.get('/dashboard', isAdmin, adminController.homeAdminPage);
router.post('/dashboard', isAdmin, adminController.changeRoleUser);
router.post('/pollDelete', isAdmin,adminController.deletePoll);

//Route pour logout
router.get('/logout', userAuthController.logoutAndRedirect);






module.exports = router;