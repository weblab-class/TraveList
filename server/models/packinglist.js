const mongoose = require("mongoose");

const Item = require("./item");

//packing list
const PackinglistSchema = new mongoose.Schema({
  user: String,
  bio: String,
  title: { type: String, default: "Untitled" },
  destination: String,
  // list: [Item],
});

// compile model from schema
module.exports = mongoose.model("packinglist", PackinglistSchema);
