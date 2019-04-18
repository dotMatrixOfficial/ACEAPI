const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const vehicleSchema = new Schema({
    id: { type: Number, require:true, unique: true },
    make: {type:String,trim:true},
    model: {type:String,trim:true},
    bodytype:{type:String,trim:true},
    year:{type:Number,trim:true},
});

const Vehicle = mongoose.model('Vehicle', vehicleSchema);
module.exports = Vehicle;