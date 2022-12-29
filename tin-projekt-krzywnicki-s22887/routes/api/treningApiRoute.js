const express = require('express');
const router = express.Router();

const TreningApiController = require('../../api/TreningAPI');


router.get('/', TreningApiController.getTrening);
router.get('/:treId', TreningApiController.getTreningById);
router.post('/', TreningApiController.createTrening);
router.put('/:treId', TreningApiController.updateTrening);
router.delete('/:treId', TreningApiController.deleteTrening);

module.exports = router;