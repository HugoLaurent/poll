const express = require('express');
const mainController = require('../controllers/mainController');


const router = express.Router();

router.get('/', mainController.homePage);

router.post('/', mainController.addVote);

module.exports = router;