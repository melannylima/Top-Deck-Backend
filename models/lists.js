const mongoose = require('mongoose');

const deckSchema = new mongoose.Schema({
  //normally no arrays in databases
  name: {
    type: String,
    required: true,
    default: 'My Deck'
  }
  // delete the below array as this is not preferred in most databases
  // cards: {
  //   type: Array,
  //   default: []
  // }
})

const Deck = mongoose.model('Deck', deckSchema)

module.exports = Deck;