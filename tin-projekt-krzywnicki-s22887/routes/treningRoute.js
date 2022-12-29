


const express = require('express');
const router = express.Router();

const treningController = require('../controllers/treningController');
router.get('/', treningController.showTrening);
router.get('/add', treningController.showAddTreningForm);
router.get('/edit/:treId', treningController.showEditTreningForm);
router.get('/szczeg/:treId', treningController.showTreningSzczegoly);

router.post('/add', treningController.addTrening); 
router.post('/edit', treningController.updateTrening);
router.get('/delete/:treId', treningController.deleteTrening);


module.exports = router;