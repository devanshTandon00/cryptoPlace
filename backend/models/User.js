const mongoose = require("mongoose");

//Define schema
const Schema = mongoose.Schema;
const UserSchema = new Schema({
  address: {
    type: String,
    required: true
  },
  username: {
    type: String,
  },
  email: {
    type: String,
  },
});

//Define Data Model (data type in the database... name of schema: BlogPost, actual schema 2nd argument)
const User = mongoose.model("User", UserSchema);

module.exports = User;
