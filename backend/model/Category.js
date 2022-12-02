const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    title: {
      type: String,
      required: true,
      min: 6,
      max: 255,
    },
    icon: {
      type: String,
      required: true,
      max: 255,
      unique: true,
    },
    items: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Item'
    }]
  });
  
module.exports = mongoose.model('Category', categorySchema);