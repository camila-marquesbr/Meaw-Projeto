const express = require('express');
const router = express.Router();
const meawController = require('../controllers/meawController');

router.get('/all', meawController.getPets);
router.get('/nome/:nome', meawController.getNomePets )
router.post('/add', meawController.addPet)
router.put('/atualizar', meawController.updatePet)
router.delete('deletar', meawController.deleteByIdPet)
//router.get('/pets/:id', meawController.getById);






module.exports= router;
