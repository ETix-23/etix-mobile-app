const mongoose = require("mongoose");
const { ticketSchema } = require("./tickets.model");
const routeSchema = new mongoose.Schema({
  origin: {
    type: String,
    required: true,
  },
  destination: {
    type: String,
    required: true,
  },
  distance: {
    type: String,
   
  },
  duration: {
    type: String,
  
  },
  numberOfTickets: {
    type: Number,
    required: true,
  },
  transportCompany:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Company",
  }


});

const Route = mongoose.model("Route", routeSchema);
module.exports = Route;
