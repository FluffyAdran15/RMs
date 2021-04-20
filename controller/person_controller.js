var Vehicle = require('../models/vehicle');
var incident = require('../models/incident');
var Person = require('../models/person');
var async = require('async');
var mongoose = require('mongoose');



const { body,validationResult } = require('express-validator');

exports.create_form =  function(req, res) {
    res.render('form');
};


// Display list ofperson.
exports.person_list = function (req,res,next) {
    Person.find()
        .sort([['last_name', 'ascending']])
        .exec(function (err, list_persons) {
            if (err) { return next(err); }
            //Successful, so render
            res.render('person_list', { title: 'person List', person_list: list_persons });
        });
};
// Display detail page for a specific Person.
exports.person_detail = function(req, res, next) {
    
    async.parallel({
        person: function(callback) {
            Person.findById(req.params.id)
              .exec(callback(null,Person))
        },
    }, function(err, results) {
        if (err) { return next(err); } // Error in API usage.
        if (results.person==null) { // No results.
            var err = new Error('Person not found');
            err.status = 404;
            return next(err);
        }
        // Successful, so render.
        res.render('person_detail', { title: 'Person Detail', person: results.person} );
    });

};
// Display Person create form on GET.
exports.create_person_get = function (req, res, next) {
    res.render('person_form', { title: 'Create Person' });
};
// Handle person create on POST.
exports.person_create_post = [
    // Validate and sanitize fields.
    body('first_name').trim().isLength({ min: 1 }).escape().withMessage('First name must be specified.')
        .isAlphanumeric().withMessage('First name has non-alphanumeric characters.'),
    body('mid_name').trim().isLength({ max: 1 }).escape().withMessage('Middle intial must be specified.')
        .isAlphanumeric().withMessage('Family name has non-alphanumeric characters.'),
    body('last_name').trim().isLength({ min: 1 }).escape().withMessage('Family name must be specified.')
        .isAlphanumeric().withMessage('Family name has non-alphanumeric characters.'),
    body('Dob', 'Invalid date of birth').optional({ checkFalsy: true }).isISO8601().toDate(),
    // Process request after validation and sanitization.
    (req, res, next) => {
        // Extract the validation errors from a request.
        const errors = validationResult(req);
        // Create Person object with escaped and trimmed data
        var person = new Person(
            {
                coder: req.body.coder,
                first_name: req.body.first_name,
                mid_name: req.body.mid_name,
                last_name: req.body.last_name,
                Dob: req.body.Dob,
                alias: req.body.alias,
                hair: req.body.hair,
                racer: req.body.racer,
                sos_num: req.body.sos_num,
                dl_num: req.body.dl_num,
                stm: req.body.stm,
                adress: req.body.adress,
                phone: req.body.phone,
                height: req.body.height,
                gang_aff: req.body.gang_aff,
                hazard: req.body.hazard,
                weight: req.body.weight,
                eye: req.body.eye,
                gen: req.body.gen,
            }
        );
        if (!errors.isEmpty()) {
            // There are errors. Render form again with sanitized values/errors messages.
            res.render('person_form', {person:person, errors: errors.array() });
            return;
        }
        else {
            // Data from form is valid.
            // Save person.
            person.save(function (err) {
                if (err) { return next(err); }
                // Successful - redirect to new person record.
                res.redirect(person.url);
            });
        }
    }
];
// Display person delete form on GET.
exports.person_delete_get = function (req, res) {
    res.send('NOT IMPLEMENTED: person create GET');
};
// Handle person delete on POST.
exports.person_delete_post = function (req, res) {
    res.send('NOT IMPLEMENTED: person delete POST');
};
// Display person update form on GET.
exports.person_update_get = function (req, res) {
    Person.findById(req.params.id, function (err, person) {
        if (err) { return next(err); }
        if (person == null) { // No results.
            var err = new Error('Person not found');
            err.status = 404;
            return next(err);
        }
        // Success.
        res.render('person_form', { title: 'Update Person', person: person });
    });
};
// Handle person update on POST.
exports.person_update_post = [
    // Validate and santize fields.
    body('first_name').trim().isLength({ min: 1 }).escape().withMessage('First name must be specified.')
        .isAlphanumeric().withMessage('First name has non-alphanumeric characters.'),
    body('last_name').trim().isLength({ min: 1 }).escape().withMessage('Last name must be specified.')
        .isAlphanumeric().withMessage('Last name has non-alphanumeric characters.'),
    body('Dob', 'Invalid date of birth').optional({ checkFalsy: true }).isISO8601().toDate(),
   
    // Process request after validation and sanitization.
    (req, res, next) => {
        // Extract the validation errors from a request.
        const errors = validationResult(req);
        // Create Author object with escaped and trimmed data (and the old id!)
        var person = new Person(
            {
                coder: req.body.coder,
                first_name: req.body.first_name,
                mid_name: req.body.mid_name,
                last_name: req.body.last_name,
                Dob: req.body.Dob,
                alias: req.body.alias,
                hair: req.body.hair,
                racer: req.body.racer,
                sos_num: req.body.sos_num,
                dl_num: req.body.dl_num,
                stm: req.body.stm,
                adress: req.body.adress,
                phone: req.body.phone,
                height: req.body.height,
                gang_aff: req.body.gang_aff,
                hazard: req.body.hazard,
                weight: req.body.weight,
                eye: req.body.eye,
                gen: req.body.gen,
                _id: req.params.id
            }
        );
        if (!errors.isEmpty()) {
            // There are errors. Render the form again with sanitized values and error messages.
            res.render('person_form', { title: 'Update person', person: person, errors: errors.array() });
            return;
        }
        else {
            // Data from form is valid. Update the record.
            Person.findByIdAndUpdate(req.params.id, person, {}, function (err, theperson) {
                if (err) { return next(err); }
                // Successful - redirect to genre detail page.
                res.redirect(theperson.url);
            });
        }
    }
];