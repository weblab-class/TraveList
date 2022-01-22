const mongoose = require("mongoose");

const Item = require("./item");
const List = require("./packinglist");

//post
const PostSchema = new mongoose.Schema({
  //list: List,
  list: String, //which list it is
  destination: String,
});

// compile model from schema
module.exports = mongoose.model("post", PostSchema);
