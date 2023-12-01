const mongoose = require("mongoose");

const placesSchema = mongoose.Schema({
  nickname: String,
  name: String,
  longitude: Number,
  latitude: Number,
});

const Place = mongoose.model("places", placesSchema);

module.exports = Place;
