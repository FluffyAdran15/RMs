var Vehicle = require('../models/vehicle');
var incident = require('../models/incident');
var person = require('../models/person');

const { body, validationResult } = require('express-validator');


// Display list of all Vehicles.
exports.vehicle_list = function(req, res) {
    Vehicle.find()
    .sort([['vehicle_model', 'ascending']])
    .exec(function (err, list_vehicles) {
        if (err) { return next(err); }
        //Successful, so render
        res.render('vehicle_list', { title: 'Vehicle List', vehicle_list: list_vehicles });
    });
};

// Display detail page for a specific Vehicle.
exports.vehicle_detail = function(req, res) {
    var vehicle = [];
    async() => {
        let Veh_num = await Promise.resolve(vehicle.find(Veh_num));
        let Vin_Num = await Promise.resolve(vehicle.find(Vin_Num));
        let Vec_serial = await Promise.resolve(vehicle.find(Vec_serial));
        let lic_Num = await Promise.resolve(vehicle.find(lic_Num));
        let Vec_state = await Promise.resolve(vehicle.find(Vec_state));
        let Veh_Year = await Promise.resolve(vehicle.find(Veh_Year));
        let Vec_Make = await Promise.resolve(vehicle.find(Vec_Make));
        let Vec_Model = await Promise.resolve(vehicle.find(Vec_Model));
        let Vec_color = await Promise.resolve(vehicle.find(Vec_color));
        let Vec_Detail = await Promise.resolve(vehicle.find(Vec_Detail));
        let Vec_Reg = await Promise.resolve(vehicle.find(Vec_Reg));
        let Vec_Body = await Promise.resolve(vehicle.find(Vec_Body));
    }
    vehicle.push(Veh_num,Vin_Num,Vec_serial,lic_Num,Vec_state,
        Veh_Year,Vec_Make,Vec_Model,Vec_color,Vec_Detail,
        Vec_Reg,Vec_Body),
        function(err, results) {
            if (err) { return next(err); } // Error in API usage.
            if (results.Vehicle == null) { // No results.
                var err = new Error('Vehicle not found');
                err.status = 404;
                return next(err);
            }
            // Successful, so render.
            res.render('vehicle_detail', { vehicle: results.Vehicle });
        };
};

// Display Vehicle create form on GET.
exports.vehicle_create_get = function(req, res) {
    res.render('vehicle_form', { title: 'Create Vehicle' });
};

// Handle Vehicle create on POST.
exports.vehicle_create_post = [
    // Validate and sanitize fields.
    body('plate_number').trim().isLength({ min: 1, max: 7 }).escape().withMessage('Plate number must be specified.')
        .isAlphanumeric().withMessage('Plate number has alphanumeric characters.'),
    body('vehicle_color').trim().isLength({ max: 3 }).escape().withMessage('Vehicle color must be specified.')
        .isAlphanumeric().withMessage('Vehicle color has non-alphanumeric characters.'),
    body('vehicle_year').trim().isLength({ min: 4, max: 4 }).escape().withMessage('Vehicle year must be specified.')
        .isAlphanumeric().withMessage('Vehicle year has numeric characters.'),
    body('vehicle_make').trim().isLength({ min: 1 }).escape().withMessage('Vehicle make must be specified.')
        .isAlphanumeric().withMessage('Vehicle make has alphanumeric characters.'),
    body('vehicle_model').trim().isLength({ min: 1 }).escape().withMessage('Vehicle model must be specified.')
        .isAlphanumeric().withMessage('Vehicle model has alphanumeric characters.'),
    body('vehicle_body_type').trim().isLength({ max: 2 }).escape().withMessage('Vehicle body type must be specified.')
        .isAlphanumeric().withMessage('Vehicle body type has alphanumeric characters.'),
    body('vehicle_details').trim().isLength({ min: 1 }).escape().withMessage('Vehicle details must be specified.')
        .isString().withMessage('Vehicle details has non-alphanumeric characters.'),
    body('vehicle_vin').trim().isLength({ min: 1, max: 17 }).escape().withMessage('Vehicle vin must be specified.')
        .isAlphanumeric().withMessage('Vehicle vin has numeric characters.'),
    body('vehicle_registration').trim().isLength({ min: 1 }).escape().withMessage('Vehicle registration must be specified.')
        .isString().withMessage('Vehicle registration has non-alphanumeric characters.'),

    // Process request after validation and sanitization.
    (req, res, next) => {

        // Extract the validation errors from a request.
        const errors = validationResult(req);

        // Create Vehicle object with escaped and trimmed data
        var vehicle = new Vehicle(
            {
                Veh_num: req.body.Vec_num,
                Vin_Num: req.body.Vin_Num,
                Vec_serial: req.body.Vec_serial,
                lic_Num: req.body.lic_Num,
                Vec_state: req.body.Vec_state,
                Vec_Year: req.body.Vec_Year,
                Veh_Make: req.body.Vec_Make,
                Vec_Model: req.body.Vec_Model,
                Vec_color: req.body.Vec_color,
                Vec_Detail: req.body.Vec_Detail,
                Vec_Reg: req.body.Vec_Reg,
                Vec_Body: req.body.Vec_Body
            }
        );

        if (!errors.isEmpty()) {
            // There are errors. Render form again with sanitized values/errors messages.
            res.render('vehicle_form', { title: 'Create Vehicle', vehicle: vehicle, errors: errors.array() });
            return;
        }
        else {
            // Data from form is valid.

            // Save incident.
            vehicle.save(function (err) {
                if (err) { return next(err); }
                // Successful - redirect to new author record.
                res.redirect(vehicle.url);
            });
        }
    }
    ];


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
    Vehicle.findById(req.params.id, function (err, vehicle) {
        if (err) { return next(err); }
        if (vehicle == null) { // No results.
            var err = new Error('Vehicle not found');
            err.status = 404;
            return next(err);
        }
        // Success.
        res.render('vehicle_form', { title: 'Update Vehicle', vehicle: vehicle });

    });
};

// Handle Vehicle update on POST.
exports.vehicle_update_post = [
    // Validate and santize fields.
    body('plate_number').trim().isLength({ min: 1, max: 7 }).escape().withMessage('Plate number must be specified.')
        .isAlphanumeric().withMessage('Plate number has alphanumeric characters.'),
    body('vehicle_color').trim().isLength({ max: 3 }).escape().withMessage('Vehicle color must be specified.')
        .isAlphanumeric().withMessage('Vehicle color has non-alphanumeric characters.'),
    body('vehicle_year').trim().isLength({ min: 4, max: 4 }).escape().withMessage('Vehicle year must be specified.')
        .isAlphanumeric().withMessage('Vehicle year has numeric characters.'),
    body('vehicle_make').trim().isLength({ min: 1 }).escape().withMessage('Vehicle make must be specified.')
        .isAlphanumeric().withMessage('Vehicle make has alphanumeric characters.'),
    body('vehicle_model').trim().isLength({ min: 1 }).escape().withMessage('Vehicle model must be specified.')
        .isAlphanumeric().withMessage('Vehicle model has alphanumeric characters.'),
    body('vehicle_body_type').trim().isLength({ max: 2}).escape().withMessage('Vehicle body type must be specified.')
        .isAlphanumeric().withMessage('Vehicle body type has alphanumeric characters.'),
    body('vehicle_details').trim().isLength({ min: 1 }).escape().withMessage('Vehicle details must be specified.')
        .isAlphanumeric().withMessage('Vehicle details has non-alphanumeric characters.'),
    body('vehicle_vin').trim().isLength({ min: 1, max: 17 }).escape().withMessage('Vehicle vin must be specified.')
        .isAlphanumeric().withMessage('Vehicle vin has numeric characters.'),
    body('vehicle_registration').trim().isLength({ min: 1 }).escape().withMessage('Vehicle registration must be specified.')
        .isAlphanumeric().withMessage('Vehicle registration has non-alphanumeric characters.'),

    // Process request after validation and sanitization.
    (req, res, next) => {

        // Extract the validation errors from a request.
        const errors = validationResult(req);

        // Create Vehicle object with escaped and trimmed data (and the old id!)
        var vehicle = new Vehicle(
            {
                Veh_num: req.body.Vec_num,
                Vin_Num: req.body.Vin_Num,
                Vec_serial: req.body.Vec_serial,
                lic_Num: req.body.lic_Num,
                Vec_state: req.body.Vec_state,
                Vec_Year: req.body.Vec_Year,
                Vec_Make: req.body.Vec_Make,
                Vec_Model: req.body.Vec_Model,
                Vec_color: req.body.Vec_color,
                Vec_Detail: req.body.Vec_Detail,
                Vec_Reg: req.body.Vec_Reg,
                Vec_Body: req.body.Vec_Body,
                _id: req.params.id
            }
        );

        if (!errors.isEmpty()) {
            // There are errors. Render the form again with sanitized values and error messages.
            res.render('vehicle_form', { title: 'Update Vehicle', vehicle: vehicle, errors: errors.array() });
            return;
        }
        else {
            // Data from form is valid. Update the record.
            Vehicle.findByIdAndUpdate(req.params.id, vehicle, {}, function (err, thevehicle) {
                if (err) { return next(err); }
                // Successful - redirect to vehicle detail page.
                res.redirect(thevehicle.url);
            });
        }
    }
];