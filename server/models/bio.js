const mongoose = require("mongoose");

const Item = require("./item");
const List = require("./packinglist");

//post
const BioSchema = new mongoose.Schema({
  //list: List,
  name: String,
  bio: String,
});

// compile model from schema
module.exports = mongoose.model("bio", BioSchema);
