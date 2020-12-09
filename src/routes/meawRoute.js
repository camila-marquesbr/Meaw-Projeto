const express = require('express');
const router = express.Router();
const meawController = require('../controllers/meawController');

router.get('/pets', meawController.getAll);
router.get('/pets/:id', meawController.getById);






module.exports= router;
