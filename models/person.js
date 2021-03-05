var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var personSchema = new Schema({
    coder:{type:String, required:true},
    first_name: {type: String, required: true, maxlength: 100 },
    last_name: {type: String, required: true, maxlength: 100 },
    mid_name: {type: String,required: false, maxlength: 1, minlength: 1},
    alias:{type: String, required:false,},
    sos_num:{type: Number, required: true},
    dl_num:{type:Number, required:true},
    racer:{type: String, required: true},
    gen:{type: String, required:true},
    weight:{type: Number, required: true},
    height:{type: Number, required:true, max:1000, min: 10},
    eye:{type: String, required: true, maxlength:3},
    hair:{type: String, required: true, maxlength:3},
    Dob:{type: Date, required: true, },
    stm:{type: String, required: false},
    adress:{type: String, required: true},
    phone:{type: Number, required:true, maxlength: 10},
    gang_aff:{type:String, required:false},
    hazard:{type:String, requird:false}
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

// Virtual for Alias
personSchema.virtual('alias').get(function () {
    return this.alias;
});
// Virtual for Social Security Number
personSchema.virtual('sos_num').get(function () {
    return this.sos_num;
});
// Virtual for Driver's Liscense Number
personSchema.virtual('dl_num').get(function () {
    return this.dl_num;
});
// Virtual for Race
personSchema.virtual('race').get(function () {
    return this.racer;
});
// Virtual for Gender
personSchema.virtual('gender').get(function () {
    return this.gen;
});
// Virtual for Weight
personSchema.virtual('weight').get(function () {
    return this.weight;
});
// Virtual for Height
personSchema.virtual('height').get(function () {
    return this.height;
});
// Virtual for Eye Color
personSchema.virtual('eye').get(function () {
    return this.eye;
});
// Virtual for Hair Color
personSchema.virtual('hair').get(function () {
    return this.hair;
});
// Virtual for Stm??????? I dunno, I'm not even supposed to be doing the back end development
personSchema.virtual('stm').get(function () {
    return this.stm;
});
// Virtual for Address
personSchema.virtual('address').get(function () {
    return this.adress;
});
// Virtual for Phone
personSchema.virtual('phone').get(function () {
    return this.phone;
});
// Virtual for Gang Affliation
personSchema.virtual('gang').get(function () {
    return this.gang_aff;
});
// Virtual for Hazard
personSchema.virtual('hazard').get(function () {
    return this.hazard;
});

// Export model.
module.exports = mongoose.model('person', personSchema);