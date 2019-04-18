const express = require('express');
const router = express.Router();
const concealmentController = require('../app/api/controllers/concealment-controller');


  
router.get('/', concealmentController.findAll);
router.get('/vehicleId/:vehicleId', concealmentController.findByVehicleId);
router.get('/make/:make',concealmentController.getByMake);
router.get('/:concealmentId',concealmentController.getById);
router.get('/model/:model',concealmentController.getByModel);
router.get('/year/:year',concealmentController.getByYear);
router.get('/:make/:model',concealmentController.getByMakeModel);
router.get('/:make/:model/:year',concealmentController.findbyMakeModelYear);
router.post('/front/:concealmentId',concealmentController.addtoFront);
router.post('/rear/:concealmentId',concealmentController.addtoRear);
router.post('/center/:concealmentId',concealmentController.addtoCenter);
router.post('/undercarriage/:concealmentId',concealmentController.addtoUndercarriage);
// router.post('/undercarriage/dis/:concealmentId/:disconcealmentId',concealmentController.addDiscoveredtoUndercarriage);
// router.post('/front/dis/:concealmentId/:disconcealmentId',concealmentController.addDiscoveredtoFront);
// router.post('/center/dis/:concealmentId/:disconcealmentId',concealmentController.addDiscoveredtoCenter);
// router.post('/rear/dis/:concealmentId/:disconcealmentId',concealmentController.addDiscoveredtoRear);

module.exports = router;