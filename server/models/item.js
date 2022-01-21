const mongoose = require("mongoose");

//define a item schema for the database
const ItemSchema = new mongoose.Schema({
  list: String, // whichlistitbelongsto
  name: String,
  amountperitem: Number,
  checked: Boolean,
});

// compile model from schema
module.exports = mongoose.model("item", ItemSchema);
