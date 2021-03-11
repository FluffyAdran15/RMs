var Vehicle = require('../models/vehicle');
var incident = require('../models/incident');
var person = require('../models/person');

const { body,validationResult } = require('express-validator');


exports.index = function (req, res) {
    res.render('index');    
};

// Display list of all incidents.
exports.incident_list = function(req, res) {
    incident.find()
    .sort([['Occur', 'ascending']])
    .exec(function (err, list_incidents) {
        if (err) { return next(err); }
        //Successful, so render
        res.render('index', { title: 'incidents List', Ocurr: list_incidents });
    });

};

// Display detail page for a specific incident.
exports.incident_detail = function(req, res) {
   let incident = [];
   async () => {
    let Ir = await  Promise.resolve(incident.find(Ir));  
    let occur = await Promise.resolve(incident.find(occur));
    let occur_time = await Promise.resolve(incident.find(occur_time));
    let location = await Promise.resolve(incident.find(location));   
    let incident_type = await Promise.resolve(incident.find(incident_type));
    let location_name = await Promise.resolve(incident.find(location_name));  
    let narritive = await Promise.resolve(incident.find(narritive));  
    let off_serialNum = await Promise.resolve(incident.find(off_serialNum));
    let repoDate = await Promise.resolve(incident.find(repoDate));


    let person = await Promise.resolve(incident.find(person));
    let vehicle = Promise.resolve(incident.find(vehicle));
   },
   incident.push(Ir,occur,occur_time,location,incident_type,location_name,narritive,off_serialNum,repoDate),
   function(err, results) {
       if (err) { return next(err); } // Error in API usage.
       if (results.incident == null) { // No results.
           var err = new Error('incident not found');
           err.status = 404;
           return next(err);
       }
       // Successful, so render.
       res.render('incident_detail', { incident: results.incident });
   };

};

// Display incident create form on GET.
exports.incident_create_get = function(req, res) {
    res.render('incident_form');
};

// Handle incident create on POST.
exports.incident_create_post = [

    // Validate and sanitize fields.
    body('Ir').trim().isLength({ min: 1 }).escape().withMessage('First name must be specified.')
        .isAlphanumeric().withMessage('First name has non-alphanumeric characters.'),
    body('occur').trim().isLength({ min: 1 }).escape().withMessage('Family name must be specified.')
        .isAlphanumeric().withMessage('Family name has non-alphanumeric characters.'),
    body('occur_time').trim().isLength({ max: 1 }).escape().withMessage('Middle intial must be specified.')
        .isAlphanumeric().withMessage('Family name has non-alphanumeric characters.'),
    body('location').trim().isLength({ max: 1 }).escape().withMessage('Middle intial must be specified.')
        .isAlphanumeric().withMessage('Family name has non-alphanumeric characters.'),
    body('incident_type', 'Invalid date of birth').optional({ checkFalsy: true }).isISO8601().toDate(),
    body('location_time', 'Invalid date of death').optional({ checkFalsy: true }).isISO8601().toDate(),
    body('narrative').trim().isLength({ min: 1 }).escape().withMessage('Narrative must be specified.')
        .isString().withMessage('Narrative has alpha characters.'),
    body('off_serialNum').trim().isLength({ min: 1 }).escape().withMessage('Narrative must be specified.')
    .isString().withMessage('Narrative has alpha characters.'),
    body('repoDate').trim().isLength({ min: 1 }).escape().withMessage('Narrative must be specified.')
    .isString().withMessage('Narrative has alpha characters.'),

    // Process request after validation and sanitization.
    (req, res, next) => {

        // Extract the validation errors from a request.
        const errors = validationResult(req);

        // Create incident object with escaped and trimmed data
        var incident = new Incident(
            {
                coder: req.body.code,
                Ir: req.body.Ir,
                occur: req.body.occur,
                occur_time: req.body.occur_time,
                location_time: req.body.location_time,
                location: req.body.location,
                incident_type: req.body.incident_type,
                narritive: req.body.narritive,
                off_serialNum: req.body.off_serialNum,
                repoDate: req.body.repoDate,
                person: req.body.person,
                vehicle: req.body.vehicle
            }
        );

        if (!errors.isEmpty()) {
            // There are errors. Render form again with sanitized values/errors messages.
            res.render('incident_form', { title: 'Create Incident', incident: incident, errors: errors.array() });
            return;
        }
        else {
            // Data from form is valid.

            // Save incident.
            incident.save(function (err) {
                if (err) { return next(err); }
                // Successful - redirect to new incident record.
                res.redirect(incident.url);
            });
        }
    }
];

// Display incident delete form on GET.
exports.incident_delete_get = function(req, res) {
    res.send('NOT IMPLEMENTED: incident delete GET');
};

// Handle incident delete on POST.
exports.incident_delete_post = function(req, res) {
    res.send('NOT IMPLEMENTED: incident delete POST');
};

// Display incident update form on GET.
exports.incident_update_get = 
function (req, res) { vehicle.findById(req.params.id, function (err, person) {
    if (err) { return next(err); }
    if (vehicle == null) { // No results.
        var err = new Error('Person not found');
        err.status = 404;
        return next(err);
    }
    // Success.
    res.render('vehicle_form', { title: 'Update vehicle', vehicle: vehicle });
});
};

// Handle incident update on POST.
exports.incident_update_post = [
 // Validate and sanitize fields.
 body('Ir').trim().isLength({ min: 1 }).escape().withMessage('First name must be specified.')
 .isAlphanumeric().withMessage('First name has non-alphanumeric characters.'),
body('occur').trim().isLength({ min: 1 }).escape().withMessage('Family name must be specified.')
 .isAlphanumeric().withMessage('Family name has non-alphanumeric characters.'),
body('occur_time').trim().isLength({ max: 1 }).escape().withMessage('Middle intial must be specified.')
 .isAlphanumeric().withMessage('Family name has non-alphanumeric characters.'),
body('location').trim().isLength({ max: 1 }).escape().withMessage('Middle intial must be specified.')
 .isAlphanumeric().withMessage('Family name has non-alphanumeric characters.'),
body('incident_type', 'Invalid date of birth').optional({ checkFalsy: true }).isISO8601().toDate(),
body('location_time', 'Invalid date of death').optional({ checkFalsy: true }).isISO8601().toDate(),
body('narrative').trim().isLength({ min: 1 }).escape().withMessage('Narrative must be specified.')
 .isString().withMessage('Narrative has alpha characters.'),
body('off_serialNum').trim().isLength({ min: 1 }).escape().withMessage('Narrative must be specified.')
.isString().withMessage('Narrative has alpha characters.'),
body('repoDate').trim().isLength({ min: 1 }).escape().withMessage('Narrative must be specified.')
.isString().withMessage('Narrative has alpha characters.'),

// Process request after validation and sanitization.
(req, res, next) => {

 // Extract the validation errors from a request.
 const errors = validationResult(req);

 // Create incident object with escaped and trimmed data
 var incident = new Incident(
     {
        coder: req.body.code,
         Ir: req.body.Ir,
         occur: req.body.occur,
         occur_time: req.body.occur_time,
         location_time: req.body.location_time,
         location: req.body.location,
         incident_type: req.body.incident_type,
         narritive: req.body.narritive,
         off_serialNum: req.body.off_serialNum,
         repoDate: req.body.repoDate,
         person: req.body.person,
         vehicle: req.body.vehicle,
         _id: req.params.id
     }
 );

        if (!errors.isEmpty()) {
            // There are errors. Render form again with sanitized values/error messages.
            res.render('person_form', { title: 'Update person', person: person, errors: errors.array() });
            return;
        }
        else {
            // Data from form is valid. Update the record.
            Incident.findByIdAndUpdate(req.params.id, incident, {}, function (err, incident) {
                if (err) { return next(err); }
                // Successful - redirect to incident detail page.
                res.redirect(incident.url);
            });
        }
    }
];
