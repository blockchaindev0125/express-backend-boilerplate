const mongoose = require('mongoose');

const { Schema } = mongoose;
// setting user schema
const UserSchema = new Schema({
  name: {
    type: String,
    // second parameter of array is for message display
    match: [/[a-zA-Z0-9]/, 'is invalid'],
    required: [true, 'cant be blank'],
  },
  email: {
    type: String,
    lowercase: true,
    unique: true,
    match: [/[a-zA-Z0-9]/, 'is invalid'],
    required: [true, 'cant be blank'],
  },
  password: {
    type: String,
    required: true,
    // not allow white spaces
    trim: true,
  },
  // manage each user post
  // posts: [
  //   {
  //     type: Schema.Types.ObjectId,
  //     ref: 'Posts',
  //   },
  // ],
});

// create user model
const userModel = mongoose.model('Users', UserSchema);

module.exports = userModel;
