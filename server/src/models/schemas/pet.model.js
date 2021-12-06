const mongoose = require('mongoose');
const { Schema } = mongoose;

const PetSchema = new Schema(
  {
    petname: {
      type: String,
      trim: true,
      required: true,
    },
    image: {
      type: String,
      trim: true,
      // required: true
    },
    userid: {
      type: String,
      //required: true
    },
    race: {
      type: String,
      trim: true,
      // required: true
    },
    species: {
      type: String,
      trim: true,
      // required: true
    },
    color: {
      type: String,
      trim: true,
      // required: true
    },
    gender: {
      type: String,
      trim: true,
      // required: true
    },
    description: {
      type: String,
      trim: true,
    },
    age: {
      // type: Number,
      age_range: 'String',
      number: Number,
    },
    direction: {
      type: String,
      trim: true,
      // required: true
    },
    publicationDate: {
      type: String,
      trim: true,
      // required: true
    },
    category: {
      type: String,
      trim: true,
      // required: true
    },
    is_castrated: {
      type: Boolean,
      default: false,
    },
    is_authorized: {
      type: Boolean,
      default: false,
    },
  },
  { collections: 'pets' }
);

const pets = mongoose.model('pets', PetSchema);
module.exports = pets;
