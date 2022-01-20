const mongoose = require("mongoose");

//preferences options
const PreferencespageSchema = new mongoose.Schema({
  title: { type: String, default: "Untitled" },
  genderpreference: {
    type: String,
    enum: ["Male", "Female", "Nonbinary", "Other", "Prefer Not to Say"],
    on: Boolean,
  },
  duration: {
    type: Number,
    min: 0,
    on: Boolean,
  },
  temperature: {
    on: Boolean,
    temperaturemax: Number,
    temperaturemin: Number,
  },
  doinglaundry: {
    type: String,
    enum: ["Yes", "No"],
    on: Boolean,
  },
  luggagepreference: {
    type: String,
    enum: ["Light,Regular,Comfortable"],
    on: Boolean,
  },
  mainactivities: {
    type: String,
    enum: [
      "Skiing",
      "Hiking",
      "Going to the beach",
      "Snorkeling",
      "Scubadiving",
      "Surfing",
      "Camping",
      "Sightseeing/shopping",
      "Business-related",
      "Videography",
      "None of the above",
    ],
    on: Boolean,
  },
  formoftravel: {
    type: String,
    enum: ["Plane", "Car", "Train", "Boat/Cruise", "None of the above"],
    on: Boolean,
  },
});

// compile model from schema
module.exports = mongoose.model("preferences", PreferencespageSchema);
