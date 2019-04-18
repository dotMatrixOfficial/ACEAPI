const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Vehicle= require('../models/vehicle-model');
const concealmentSchema = new Schema(
    {
    id: { type: Number, require:true, unique: true },
    make: {type:String,trim:true},
    model: {type:String,trim:true},
    year:{type:Number,trim:true},
    bodytype:{type:String,trim:true},
    vehicleId:{type: Schema.Types.ObjectId, ref: 'Vehicle' },
    img:[{type:String,trim:true}],
    front: 
    {
        concealment:[
            
            {
                title: {type:String},
                description: {type:String},
                src:[{type:String}],
                location:{type:String},
                date:{type:Number},
                userId:{type:String},
                referenceNo:{type:Number},
                countFound:{type:Number},
                discovered:[{
                    location:{type:String},
                    userId:{type:String},
                    referenceNo:{type:Number},
                }]
            }
        ]
    },
    center: 
    {
        concealment:[
            
            {
                title: {type:String},
                description: {type:String},
                src:[{type:String}],
                location:{type:String},
                date:{type:Number},
                userId:{type:String},
                referenceNo:{type:Number},
                countFound:{type:Number},
                discovered:[{
                    location:{type:String},
                    userId:{type:String},
                    referenceNo:{type:Number},
                }]
            }
        ]
    },
    rear: 
    {
        concealment:[
            
            {
                title: {type:String},
                description: {type:String},
                src:[{type:String}],
                location:{type:String},
                date:{type:Number},
                userId:{type:String},
                referenceNo:{type:Number},
                countFound:{type:Number},
                discovered:[{
                    location:{type:String},
                    userId:{type:String},
                    referenceNo:{type:Number},
                }]
            }
        ]
    },
    undercarriage: 
    {
        concealment:[
            
            {
                title: {type:String},
                description: {type:String},
                src:[{type:String}],
                location:{type:String},
                date:{type:Number},
                userId:{type:String},
                referenceNo:{type:Number},
                countFound:{type:Number},
                discovered:[{
                    location:{type:String},
                    userId:{type:String},
                    referenceNo:{type:Number},
                }]
            }
        ]
    }
});

const Concealment = mongoose.model('Concealment', concealmentSchema);
module.exports = Concealment;