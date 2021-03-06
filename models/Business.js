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
  city: {
    type: String,
    required: true,
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
  },
  email: {
    type: String,
    required: false,
  }
})

const Business = mongoose.model('Business', businessSchema);

module.exports = Business;
