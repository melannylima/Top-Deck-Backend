const mongoose = require('mongoose');

const cardSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    default: 'My Card',
},
    id: {
        type: Number,
        required: true,
        default: "my ID",
        unique: true,
        required: true,
},

    deckId: {
        type: Number,
        required: true,

    }
})

const Card = mongoose.model('Card', cardSchema)

module.exports = Card;