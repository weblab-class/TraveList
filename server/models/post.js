const mongoose = require("mongoose");

const Item = require("./item");
const List = require("./packinglist");

//post
const PostSchema = new mongoose.Schema({
  //list: List,
  user: String,
  bio: String,
  title: { type: String, default: "Untitled" },
});

// compile model from schema
module.exports = mongoose.model("post", PostSchema);
