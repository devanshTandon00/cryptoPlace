const mongoose = require("mongoose");

//Define schema
const Schema = mongoose.Schema;
const UserSchema = new Schema({
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  token: {
    type: String,
    required: false
  }
});

//Define Data Model (data type in the database... name of schema: BlogPost, actual schema 2nd argument)
const User = mongoose.model("User", UserSchema);

module.exports = User;
