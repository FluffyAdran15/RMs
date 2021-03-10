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

// Virtual for IR
personSchema.virtual('irr').get(function () {
    return this.Ir;
});
// Virtual for Occurence
personSchema.virtual('occurence').get(function () {
    return this.occur;
});
// Virtual for Occurence Time
personSchema.virtual('occurence_time').get(function () {
    return this.occur_time;
});
// Virtual for Incident Type
personSchema.virtual('incident').get(function () {
    return this.incident_type;
});
// Virtual for Location
personSchema.virtual('locationPlace').get(function () {
    return this.location;
});
// Virtual for Location Name
personSchema.virtual('locationPlaceName').get(function () {
    return this.location_name;
});
// Virtual for Narritive
personSchema.virtual('narr').get(function () {
    return this.narritive;
});
// Virtual for Officer Serial Number
personSchema.virtual('officer_serialNum').get(function () {
    return this.off_serialNum;
});
// Virtual for Report Date
personSchema.virtual('reportDate').get(function () {
    return this.repoDate;
});

