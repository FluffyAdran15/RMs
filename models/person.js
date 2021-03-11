var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var PersonSchema = new Schema({
    first_name: {type: String, required: true, maxlength: 100 },
    last_name: {type: String, required: true, maxlength: 100 },
    mid_name: {type: String,required: false, maxlength: 1, minlength: 1},
    alias:{type: String, required:false,},
    sos_num:{type: Number, required: true},
    dl_num:{type:Number, required:true},
    racer:{type: String, required: true},
    gen:{type: String, required:true},
    weight:{type: Number, required: true},
    height:{type: Number, required:true},
    eye:{type: String, required: true},
    hair:{type: String, required: true},
    Dob:{type: Date, required: true, },
    stm:{type: String, required: false},
    adress:{type: String, required: true},
    phone:{type: Number, required:true},
    gang_aff:{type:String, required:false},
    hazard:{type:String, requird:false}
});

// Virtual for Person's URL
PersonSchema.virtual('url').get(function () {
        return '/catalog/person/' + this._id;
    });

// Virtual for First Name
PersonSchema.virtual('fist').get(function () {
    return this.first_name;
});
// Virtual for Code
PersonSchema.virtual('code').get(function () {
    return this.coder;
});
// Virtual for Middle Name
PersonSchema.virtual('mid').get(function () {
    return this.mid_name;
});
// Virtual for Last Name
PersonSchema.virtual('last').get(function () {
    return this.last_name;
});
// Virtual for the person instance url
PersonSchema.virtual('pers').get(function () {
    return '/catalog/person' + get._id;
});
// Virtual for persons Date of Birth
PersonSchema.virtual('DOB').get(function () {
    return DateTime.fromJSDate(this.date_of_birth).toISODate(); //format 'YYYY-MM-DD'
});

// Virtual for Alias
PersonSchema.virtual('aliass').get(function () {
    return this.alias;
});
// Virtual for Social Security Number
PersonSchema.virtual('sosNum').get(function () {
    return this.sos_num;
});
// Virtual for Driver's Liscense Number
PersonSchema.virtual('dlNum').get(function () {
    return this.dl_num;
});
// Virtual for Race
PersonSchema.virtual('roce').get(function () {
    return this.racer;
});
// Virtual for Gender
PersonSchema.virtual('gander').get(function () {
    return this.gen;
});
// Virtual for Weight
PersonSchema.virtual('wieght').get(function () {
    return this.weight;
});
// Virtual for Height
PersonSchema.virtual('hieght').get(function () {
    return this.height;
});
// Virtual for Eye Color
PersonSchema.virtual('eyes').get(function () {
    return this.eye;
});
// Virtual for Hair Color
PersonSchema.virtual('hairs').get(function () {
    return this.hair;
});
// Virtual for Scars Tats Marks
PersonSchema.virtual('stms').get(function () {
    return this.stm;
});
// Virtual for Address
PersonSchema.virtual('addresss').get(function () {
    return this.adress;
});
// Virtual for Phone
PersonSchema.virtual('phonse').get(function () {
    return this.phone;
});
// Virtual for Gang Affliation
PersonSchema.virtual('gang').get(function () {
    return this.gang_aff;
});
// Virtual for Hazard
PersonSchema.virtual('hazards').get(function () {
    return this.hazard;
});

 module.exports = mongoose.model('Person', PersonSchema );