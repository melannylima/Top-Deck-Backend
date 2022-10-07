const mongoose = require('mongoose');

const connectionStr = process.env.MONGODB_URI || 'mongodb://localhost:27017/pokemondb'

mongoose.connect(connectionStr);

const Card = require('../models/cards')

const cardSeedData = [
   { name: 'Bulbasaur',
   deckId: '633ccd3fdf1ba94c86db9388'
}
]

const seedDB = async () => {
    // await Deck.deleteMany({});
    await Card.insertMany(cardSeedData);
}

seedDB().then(() => {
    mongoose.connection.close();
})