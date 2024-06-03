const mongoose = require('mongoose');

const busSchema = new mongoose.Schema({
 
  company:{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Company",
    required:true
  },
 plateNo:{
  type:Number,
  required:true
 },
 numberOfSeats:{
  type:Number,
  required:true
 }
});

const Bus=mongoose.model('Bus', busSchema);

module.exports =Bus;