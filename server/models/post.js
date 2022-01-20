const mongoose = require("mongoose");

//post
const PostSchema = new mongoose.Schema({
  user: String,
  bio: String,
  title: { type: String, default: "Untitled" },
  itemtopack: String,
  amountperitem: Number,
  destination: String,
});

// compile model from schema
module.exports = mongoose.model("post", PostSchema);
