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
  departureTime: {
    type: Date,
    required: true,
  },
  arrivalTime: {
    type: Date,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  currency: {
    type: String,
    required: true,
    default: 'RWF', // Default currency
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
