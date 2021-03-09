var mongoose = require('mongoose');

var Schema = mongoose.Schema;


var VehicleSchema = new Schema({
    Veh_num:{type: Number, required: true},
    Vin_Num:{type: Number, required: true},
    Vec_serial:{type:Number, required:true},
    lic_Num:{type:Number, required: true},
    Vec_state:{type:String, required:true},
    Veh_Year:{type:Number, required:true, max:3000, min:1900, maxlength:4},
    Vec_Make:{type:String, required:true},
    Vec_Model:{type:String, required:true},
    Vec_color:{type:String, required:true},
    Vec_Detail:{type:String, required:true},
    Vec_Reg:{type:String, required:true},
    Vec_Body:{type:String, required:true}
})




VehicleSchema.virtual('car').get(function (){
    return '/catalog/Vechicle' + this._id;
})

// Virtual for Vehicle Number
VehicleSchema.virtual('Vec_num').get(function () {
    return this.Veh_num;
});
// Virtual for Vehicle State
VehicleSchema.virtual('Veh_state').get(function () {
    return this.Vec_state;
});
// Virtual for Vehicle Year
VehicleSchema.virtual('Vec_Year').get(function () {
    return this.Veh_Year;
});
// Virtual for Vehicle Make
VehicleSchema.virtual('Veh_Make').get(function () {
    return this.Vec_Make;
});
// Virtual for Vehicle Model
VehicleSchema.virtual('Veh_Model').get(function () {
    return this.Vec_Model;
});
// Virtual for Vehicle Color
VehicleSchema.virtual('Veh_color').get(function () {
    return this.Vec_color;
});
// Virtual for Vehicle Detail
VehicleSchema.virtual('Veh_Detail').get(function () {
    return this.Vec_Detail;
});
// Virtual for Vehicle Reg
VehicleSchema.virtual('Veh_Reg').get(function () {
    return this.Vec_Reg;
});
// Virtual for Vehicle Body
VehicleSchema.virtual('Veh_Body').get(function () {
    return this.Vec_Body;
});