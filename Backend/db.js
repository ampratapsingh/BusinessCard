require('dotenv').config();
const mongoose = require("mongoose");

mongoose.connect(process.env.MONGODB_URI);

const cardSchema = new mongoose.Schema({
  name: String,
  description: String,
  interests: [String]
});



const Card = mongoose.model("Card", cardSchema);

module.exports = Card;