const express = require('express');
const router = express.Router();

const wejsciaController = require('../controllers/wejsciaController');


router.get('/', wejsciaController.showWejscia);
router.get('/add', wejsciaController.showAddWejsciaForm);
router.get('/edit/:weId', wejsciaController.showFormWejsciaEdit);
router.get('/szczeg/:weId', wejsciaController.showWejsciaSzczegoly);

router.post('/add', wejsciaController.addWejscia); 
router.post('/edit', wejsciaController.updateWejscia);
router.get('/delete/:weId', wejsciaController.deleteWejscia);

module.exports = router;