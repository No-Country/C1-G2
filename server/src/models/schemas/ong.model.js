const mongoose = require('mongoose');
const { Schema } = mongoose;

const OngSchema = new Schema({
  nit: {
    type: String,
    trim: true,
    required: true,
  },
  name: {
    type: String,
    trim: true,
    required: true,
  },
  phone: {
    type: String,
    trim: true,
  },
  email: {
    type: String,
    trim: true,
  },
  is_active: {
    type: Boolean,
    default: true,
  },
  logo: {
    type: String,
    trim: true,
  },
  users_publications: [String],
});

const ongs = mongoose.model('ongs', OngSchema);
module.exports = ongs;
