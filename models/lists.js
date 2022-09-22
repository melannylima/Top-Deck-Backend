const mongoose = require('mongoose');

const deckSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    default: 'My Deck'
  },
  cards: {
    type: Array,
    default: []
  }
})
