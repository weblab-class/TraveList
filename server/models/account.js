const mongoose = require("mongoose");

const List = require("./packinglist");

//account information for each person on settings page
const AccountSchema = new mongoose.Schema({
  name: String,
  googleid: String,
  password: String,
  bio: String,
});

// compile model from schema
module.exports = mongoose.model("account", AccountSchema);
