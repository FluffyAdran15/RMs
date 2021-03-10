var Vehicle = require('../models/vehicle');
var incident = require('../models/incident');
var person = require('../models/person');


const { body,validationResult } = require('express-validator');

exports.create_form =  function(req, res) {
    res.render('form');
};


// Display list ofperson.
exports.person_list = function (req, res) {
    Person.find()
        .sort([['last_name', 'ascending']])
        .exec(function (err, list_persons) {
            if (err) { return next(err); }
            //Successful, so render
            res.render('person_list', { title: 'person List', person_list: list_persons });
        });
};
// Display detail page for a specific Person.
exports.person_detail = function (req, res, next) {
   let person = [] 
   async () =>{
       let coder = await  Promise.resolve(person.find(coder));  
       let first_name = await Promise.resolve(person.find(first_name));
       let last_name = await Promise.resolve(person.find(last_name));
       let mid_name = await Promise.resolve(person.find(mid_name));   
       let alias = await Promise.resolve(person.find(alias));
       let sos_num = await Promise.resolve(person.find(sos_num));  
       let dl_name = await Promise.resolve(person.find(dl_name));  
       let racer = await Promise.resolve(person.find(racer));
       let gen = await Promise.resolve(person.find(gen));
       let weight = await Promise.resolve(person.find(weight));
       let height = await Promise.resolve(person.find(height));
       let eye = await Promise.resolve(person.find(eye));
       let hair = await Promise.resolve(person.find(hair));
       let Dob = await Promise.resolve(person.find(Dob));
       let stm = await Promise.resolve(person.find(stm));
       let adress = await Promise.resolve(person.find(adress));
       let phone = await Promise.resolve(person.find(phone));
       let gang_aff = await Promise.resolve(person.find(gang_aff));
       let hazard = await Promise.resolve(person.find(hazard))
       
   },
   person.push(coder,first_name,last_name,mid_name,alias,sos_num,
    dl_name,racer,gen,weight,height,eye,hair,Dob,stm,
    adress,phone,gang_aff,hazard),
    function(err, results) {
        if (err) { return next(err); } // Error in API usage.
        if (results.person == null) { // No results.
            var err = new Error('person not found');
            err.status = 404;
            return next(err);
        }
        // Successful, so render.
        res.render('person_detail', { person: results.person });
    };
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
    body('middle_intial').trim().isLength({ max: 1 }).escape().withMessage('Middle intial must be specified.')
        .isAlphanumeric().withMessage('Family name has non-alphanumeric characters.'),
    body('last_name').trim().isLength({ min: 1 }).escape().withMessage('Family name must be specified.')
        .isAlphanumeric().withMessage('Family name has non-alphanumeric characters.'),
    body('date_of_birth', 'Invalid date of birth').optional({ checkFalsy: true }).isISO8601().toDate(),
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
                coder: req.body.code,
                first_name: req.body.first_name,
                mid_name: req.body.middle_intial,
                last_name: req.body.last_name,
                Dob: req.body.Dob,
                alias: req.body.alias,
                hair: req.body.hair_color,
                racer: req.body.race,
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