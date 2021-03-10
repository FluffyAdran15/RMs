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

// Virtual for Person's URL
personSchema.virtual('url')
    .get(function () {
        return '/catalog/person/' + this._id;
    });

// Virtual for First Name
personSchema.virtual('fist').get(function () {
    return this.first_name;
});
// Virtual for Code
personSchema.virtual('code').get(function () {
    return this.coder;
});
// Virtual for Middle Name
personSchema.virtual('mid').get(function () {
    return this.mid_name;
});
// Virtual for Last Name
personSchema.virtual('last').get(function () {
    return this.last_name;
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
personSchema.virtual('aliass').get(function () {
    return this.alias;
});
// Virtual for Social Security Number
personSchema.virtual('sosNum').get(function () {
    return this.sos_num;
});
// Virtual for Driver's Liscense Number
personSchema.virtual('dlNum').get(function () {
    return this.dl_num;
});
// Virtual for Race
personSchema.virtual('roce').get(function () {
    return this.racer;
});
// Virtual for Gender
personSchema.virtual('gander').get(function () {
    return this.gen;
});
// Virtual for Weight
personSchema.virtual('wieght').get(function () {
    return this.weight;
});
// Virtual for Height
personSchema.virtual('hieght').get(function () {
    return this.height;
});
// Virtual for Eye Color
personSchema.virtual('eyes').get(function () {
    return this.eye;
});
// Virtual for Hair Color
personSchema.virtual('hairs').get(function () {
    return this.hair;
});
// Virtual for Scars Tats Marks
personSchema.virtual('stms').get(function () {
    return this.stm;
});
// Virtual for Address
personSchema.virtual('addresss').get(function () {
    return this.adress;
});
// Virtual for Phone
personSchema.virtual('phonse').get(function () {
    return this.phone;
});
// Virtual for Gang Affliation
personSchema.virtual('gang').get(function () {
    return this.gang_aff;
});
// Virtual for Hazard
personSchema.virtual('hazards').get(function () {
    return this.hazard;
});

 