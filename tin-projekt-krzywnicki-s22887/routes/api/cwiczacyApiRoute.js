const express = require('express');
const router = express.Router();

const CwiczacyApiController = require('../../api/CwiczacyAPI');


router.get('/', CwiczacyApiController.getCwiczacy);
router.get('/:cwId', CwiczacyApiController.getCwiczacyById);
router.post('/', CwiczacyApiController.createCwiczacy);
router.put('/:cwId', CwiczacyApiController.updateCwiczacy);
router.delete('/:cwId', CwiczacyApiController.deleteCwiczacy);

module.exports = router;