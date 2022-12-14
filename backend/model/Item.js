const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
      min: 6,
      max: 255,
    },
    description: {
      type: String,
      required: true,
      min: 6,
      max: 255,
    },
    price: {
        type: Number,
        required: true
      },
    image: {
        type: String,
        required: true,
      }
  });
  
  module.exports = mongoose.model('Item', itemSchema);