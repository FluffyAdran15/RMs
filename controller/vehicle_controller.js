var Vehicle = require('../models/vehicle');
var incident = require('../models/incident');
var person = require('../models/person');



// Display list of all Vehicles.
exports.vehicle_list = function(req, res) {
    res.send('NOT IMPLEMENTED: vehicle list');
};

// Display detail page for a specific Vehicle.
exports.vehicle_detail = function(req, res) {
    res.render('vehicle_detail');
};

// Display Vehicle create form on GET.
exports.vehicle_create_get = function(req, res) {
    res.send('NOT IMPLEMENTED: vehicle create GET');
};

// Handle Vehicle create on POST.
exports.vehicle_create_post = function(req, res) {
    res.send('NOT IMPLEMENTED: vehicle create POST');
};

// Display Vehicle delete form on GET.
exports.vehicle_delete_get = function(req, res) {
    res.send('NOT IMPLEMENTED: vehicle delete GET');
};

// Handle Vehicle delete on POST.
exports.vehicle_delete_post = function(req, res) {
    res.send('NOT IMPLEMENTED: vehicle delete POST');
};

// Display Vehicle update form on GET.
exports.vehicle_update_get = function(req, res) {
    res.send('NOT IMPLEMENTED: vehicle update GET');
};

// Handle Vehicle update on POST.
exports.vehicle_update_post = function(req, res) {
    res.send('NOT IMPLEMENTED: vehicle update POST');
};
