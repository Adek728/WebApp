


const express = require('express');
const router = express.Router();

const cwiczacyController = require('../controllers/cwiczacyController');

router.get('/', cwiczacyController.showCwiczacy);
router.get('/add', cwiczacyController.showAddCwiczacyForm);
router.get('/edit/:cwId', cwiczacyController.showEditCwiczacyForm);
router.get('/szczeg/:cwId', cwiczacyController.showCwiczacySzczegoly);



router.post('/add', cwiczacyController.addCwiczacy); 
router.post('/edit', cwiczacyController.updateCwiczacy);
router.get('/delete/:cwId', cwiczacyController.deleteCwiczacy);

module.exports = router;