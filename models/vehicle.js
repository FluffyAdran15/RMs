var mongoose = require('mongoose');

var Schema = mongoose.Schema;


var VehicleSchema = new Schema({
    Vec_num:{type: Number, required: true},
    Vin_Num:{type: Number, required: true},
    Vec_serial:{type:Number, required:true},
    lic_Num:{type:Number, required: true},
    Vec_state:{type:String, required:true},
    Vec_Year:{type:Number, required:true, max:3000, min:1900, maxlength:4},
    Vec_Make:{type:String, required:true},
    Vec_Model:{type:String, required:true},
    Vec_color:{type:String, required:true},
    Vec_Detail:{type:String, required:true},
    Vec_Reg:{type:String, required:true},
    Vec_Body:{type:String, required:true}
})


//Virtual vin/serial together
VehicleSchema.virtual('vinState').get(function() {
return "Vin:" + this.Vin_Num + ', ' + "Serial#" + Vec_serial;
});

//Virtual Lis#/State
VehicleSchema.virtual('LicState').get(function (){
    return "License#:" + this.lic_Num + ', ' + 'State:' + this.Vec_state;
})

VehicleSchema.virtual('car').get(function (){
    return '/catalog/Vechicle' + this._id;
})

// Virtual for Vehicle Number
personSchema.virtual('Vec_num').get(function () {
    return this.Vec_num;
});
// Virtual for Vehicle State
personSchema.virtual('Vec_state').get(function () {
    return this.Vec_state;
});
// Virtual for Vehicle Year
personSchema.virtual('Vec_Year').get(function () {
    return this.Vec_Year;
});
// Virtual for Vehicle Make
personSchema.virtual('Vec_Make').get(function () {
    return this.Vec_Make;
});
// Virtual for Vehicle Model
personSchema.virtual('Vec_Model').get(function () {
    return this.Vec_Model;
});
// Virtual for Vehicle Color
personSchema.virtual('Vec_color').get(function () {
    return this.Vec_color;
});
// Virtual for Vehicle Detail
personSchema.virtual('Vec_Detail').get(function () {
    return this.Vec_Detail;
});
// Virtual for Vehicle Reg
personSchema.virtual('Vec_Reg').get(function () {
    return this.Vec_Reg;
});
// Virtual for Vehicle Body
personSchema.virtual('Vec_Body').get(function () {
    return this.Vec_Body;
});