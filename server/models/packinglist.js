const mongoose = require("mongoose");

//packing list
const ListSchema = new mongoose.Schema({
  user: String,
  bio: String,
  title: { type: String, default: "Untitled" },
  itemtopack: String,
  amountperitem: Number,
  checked: Boolean,
});

// compile model from schema
module.exports = mongoose.model("list", ListSchema);
