const express = require('express');
const router = express.Router();
const accountController = require('../controllers/userController');

router.post('/register', accountController.addAccount);
router.patch('/update/:id', accountController.updateAccount)


module.exports = router