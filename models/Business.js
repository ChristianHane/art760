const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const businessSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  streetAddress: {
    type: String,
    required: true,
  },
  suite: {
    type: Number
  },
  zipCode: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  website: {
    type: String,
    required: false,
  },
  category: {
    type: Array,
    required: true,
  }
})

const Business = mongoose.model('Business', businessSchema);

module.exports = Business;
