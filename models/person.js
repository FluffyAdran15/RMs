var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var personSchema = new Schema({
    first_name: {type: String, required: true, maxlength: 100 },
    last_name: {type: String, required: true, maxlength: 100 },
    mid_name: {type: String,required: false, maxlength: 1, minlength: 1},
    alias:{type: String, required:false,},
    sos_num:{type: Number, required: true},
    race:{type: String, required: true},
    gen:{type: String, required:true},
    weight:{type: Number, required: true},
    height:{type: Number, required:true, max:1000, min: 10},
    eye:{type: String, required: true, maxlength:3},
    hair:{type: String, required: true, maxlength:3},
    Dob:{type: Date, required: true, },
    stm:{type: String, required: false},
    address:{type: String, required: true},
    phone:{type: Number, required:true, maxlength: 10}
});


// Virtual for Name "full" name.
personSchema.virtual('name').get(function () {
    return this.first_name + ', '+ this.mid_name + ' ' + this.last_name;
});
// Virtual for the person instance url
personSchema.virtual('pers').get(function () {
    return '/catalog/person' + get._id;
});
// Virtual for persons Date of Birth
personSchema.virtual('DOB').get(function () {
    return DateTime.fromJSDate(this.date_of_birth).toISODate(); //format 'YYYY-MM-DD'
});

// Export model.
module.exports = mongoose.model('person', personSchema);