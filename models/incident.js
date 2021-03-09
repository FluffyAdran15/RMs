var mongoose = require('mongoose');



var Schema = mongoose.Schema;

var IncidentSchema = new Schema({
    Ir:{type:Number, required: true },
    occur:{type: Date,  required: true},
    occur_time:{type:String,  required: true},
    incident_type:{type:String,  required: true},
    location:{type:String,  required: true},
    location_name:{type:String,  required: true},
    narritive:{type:String,  required: false},
    off_serialNum:{type:Number, required: true},
    repoDate:{type: Date, required: true}  

});


