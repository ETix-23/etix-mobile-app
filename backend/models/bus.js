const mongoose = require('mongoose');

const busSchema = new mongoose.Schema({
  name: { type: String, required: true },
  route: { type: mongoose.Schema.Types.ObjectId, ref: 'Route', required: true },
  numberOfSeats: { type: Number, required: true },
}, {
  timestamps: true,
});

const Bus=mongoose.model('Bus', busSchema);

module.exports =Bus;