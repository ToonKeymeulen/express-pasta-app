let mongoose = require('mongoose');

// Packet Schema
let packetSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

let Packet = (module.exports = mongoose.model('Packet', packetSchema));
