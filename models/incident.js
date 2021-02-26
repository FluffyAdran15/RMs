var mongoose = require('mongoose');



var Schema = mongoose.Schema;

var IncidentSchema = new Schema({
    Ir:{type:Number, },
    occur:{type: Date,},
    occur_time:{type:String},
    incident_type:{type:String},
    location:{type:String},
    location_name:{type:String},
    narritive:{type:String},
    off_serialNum:{type:Number},
    repoDate:{type: Date}  

});


