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