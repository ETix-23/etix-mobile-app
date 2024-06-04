const mongoose = require("mongoose");

const ticketSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  bus: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Bus",
  },
 
});

const Ticket = mongoose.model("Ticket", ticketSchema);
module.exports = { Ticket, ticketSchema };
