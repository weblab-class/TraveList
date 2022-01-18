const mongoose = require("mongoose");

//account information for each person on settings page
const Account = new mongoose.Schema({
  name: String,
  googleid: String,
  username: String,
  password: String,
  bio: String,
  lists: [],
});

// compile model from schema
module.exports = mongoose.model("user", UserSchema);
