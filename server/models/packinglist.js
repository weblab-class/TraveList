const mongoose = require("mongoose");

const Item = require("./item");

//packing list
const PackinglistSchema = new mongoose.Schema({
  user: String,
  description: String,
  title: { type: String, default: "Untitled" },
  destination: String,
  userId: String,
  // list: [Item],
});

// compile model from schema
module.exports = mongoose.model("packinglist", PackinglistSchema);
