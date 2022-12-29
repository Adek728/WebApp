const express = require('express');
const router = express.Router();

const WejsciaApiController = require('../../api/WejsciaAPI');


router.get('/', WejsciaApiController.getWejscia);
router.get('/:weId', WejsciaApiController.getWejsciaById);
router.post('/', WejsciaApiController.createWejscia);
router.put('/:weId', WejsciaApiController.updateWejscia);
router.delete('/:weId', WejsciaApiController.deleteWejscia);

module.exports = router;