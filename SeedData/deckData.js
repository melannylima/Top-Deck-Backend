const mongoose = require('mongoose');

const connectionStr = process.env.MONGODB_URI || 'mongodb://localhost:27017/pokemondb'

mongoose.connect(connectionStr
    // useNewUrlParser: true, useUnifiedTopology: true
)

const Deck = require('../models/lists')

const deckSeedData = [
   { name: 'deckNameTest2'}
];

const seedDB = async () => {
    // await Deck.deleteMany({});
    await Deck.insertMany(deckSeedData);
};

seedDB().then(() => {
    mongoose.connection.close();
});