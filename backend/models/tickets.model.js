const mongoose = require("mongoose");

const ticketSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  company: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Company",
  },
  route: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Route",
  },
  date: {
    type: Date,
  },
});

const Ticket = mongoose.model("Ticket", ticketSchema);
module.exports = { Ticket, ticketSchema };
