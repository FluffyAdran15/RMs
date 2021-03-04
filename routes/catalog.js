var express = require('express');
var router = express.Router();




var person_controller = require('../controller/person_controller');
var vehicle_controller = require('../controller/vehicle_controller');
var incident_controller = require('../controller/incident_controller');



// GET catalog home page.
router.get('/', incident_controller.index);


//Get Form for the Rms
router.get('/form/create', person_controller.create_form);



// GET request for creating a form.
router.get('/person/create', person_controller.create_person_get);

// POST request for creating form.
router.post('/person/create', person_controller.person_create_post);

// GET request to delete B.
router.get('/person/:id/delete', person_controller.person_delete_get);

// POST request to delete Book.
router.post('/person/:id/delete', person_controller.person_delete_post);

// GET request to update Book.
router.get('/person/:id/update', person_controller.person_update_get);

// POST request to update Book.
router.post('/person/:id/update', person_controller.person_update_post);

// GET request for one Book.
router.get('/person/:id', person_controller.person_detail);

// GET request for list of all Book items.
router.get('/persons', person_controller.person_list);


/// Vehicle ROUTES ///

// GET request for creating a vehicle.
router.get('/vehicle/create', vehicle_controller.vehicle_create_get);

// POST request for creating vehicle.
router.post('/vehicle/create', vehicle_controller.vehicle_create_post);

// GET request to delete vehicle.
router.get('/vehicle/:id/delete', vehicle_controller.vehicle_delete_get);

// POST request to delete vehicle.
router.post('/vehicle/:id/delete', vehicle_controller.vehicle_delete_post);

// GET request to update vehicle.
router.get('/vehicle/:id/update', vehicle_controller.vehicle_update_get);

// POST request to update vehicle.
router.post('/vehicle/:id/update', vehicle_controller.vehicle_update_post);

// GET request for one vehicle.
router.get('/vehicle/:id', vehicle_controller.vehicle_detail);

// GET request for list of all vehicle items.
router.get('/vehicles', vehicle_controller.vehicle_list);


//Incident Routes
// GET request for creating a incident.
router.get('/incident/create', incident_controller.incident_create_get);

// POST request for create incident.
router.post('/incident/create', incident_controller.incident_create_post);

// GET request to delete incident.
router.get('/incident/:id/delete', incident_controller.incident_delete_get);

// POST request to delete incident.
router.post('/incident/:id/delete', incident_controller.incident_delete_post);

// GET request to update incident.
router.get('/incident/:id/update', incident_controller.incident_update_get);

// POST request to update incident.
router.post('/incident/:id/update', incident_controller.incident_update_post);

// GET request for one incident.
router.get('/incident/:id', incident_controller.incident_detail);

// GET request for list of all incident items.
router.get('/', incident_controller.incident_list);


module.exports = router;
