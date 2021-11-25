const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema(
  {
    username: String,
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    image: String,
    phone: String,
    role: { type: String, default: 'sampleUser' },
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: null },
  },
  { collection: 'users' }
);

const users = mongoose.model('users', UserSchema);
module.exports = users;
