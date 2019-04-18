const express = require('express');
const router = express.Router();
const vehicleController = require('../app/api/controllers/vehicle-controller');

router.post('/', vehicleController.init);
router.get('/',vehicleController.findAll);
router.get('/make/:make',vehicleController.findbyMake);
router.get('/model/:model',vehicleController.findbyModel);
router.get('/year/:year',vehicleController.findbyYear);
router.get('/:make/:model',vehicleController.findbyMakeModel);
router.get('/:make/:model/:year',vehicleController.findbyMakeModelYear);

router.get('/', vehicleController.findAll);
module.exports = router;