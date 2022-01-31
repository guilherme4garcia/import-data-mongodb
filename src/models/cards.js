const mongoose = require('mongoose')

const cardSchema = new mongoose.Schema({
  _id: Number,
  type: String,
  name: String,
  filename: String,
  image: String,
  suit: String,
  desc: String,
  meaning_up: String,
  meaning_rev: String,
  value: String
})

module.exports = mongoose.model('Cards', cardSchema)
