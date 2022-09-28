const mongoose = require('mongoose');

const cardSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
},
// add image as a stretch goal 
    deckId: {
        type: String,
        required: true,
    }
})

const Card = mongoose.model('Card', cardSchema)

module.exports = Card;