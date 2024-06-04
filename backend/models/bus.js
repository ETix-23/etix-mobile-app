const mongoose = require('mongoose');

const busSchema = new mongoose.Schema({

 
  origin: {
    type: String,
    required: true,
  },
  destination: {
    type: String,
    required: true,
  },
  departureTime: {
    type: Date,
    required: true,
  },
  arrivalTime: {
    type: Date,
    required: true,
  },
 plateNo:{
  type:String,
  required:true
 },
 numberOfTickets: {
  type: Number,
  required: true,
},
price: {
  type: Number,
  required: true,
},
transportCompany:{
  type:mongoose.Schema.Types.ObjectId,
  ref:"Company",
}
});

const Bus=mongoose.model('Bus', busSchema);

module.exports =Bus;