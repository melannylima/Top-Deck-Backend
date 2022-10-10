const db = require('../models')

// get all the decks
const indexOfDecks = (req, res) => {
    db.Deck.find({}, (err, lists) => {
        if(err) return res.status(404).json({error: err.message})
        return res.status(200).json({
            lists
        })
    })
}
// index of pokemon cards in deck
const indexOfCards = (req, res) => {
    db.Card.find({
    deckId: req.body.deckId
    }, (err, lists) => {
        if(err) return res.status(404).json({error: err.message})
        return res.status(200).json({
            lists
        })
    })
}

// create a deck with req.body
const create = (req, res) => {
    db.Deck.create(req.body, (err, createdDeck) => {
        if(err) return res.status(404).json({error: err.message})
        return res.status(200).json(createdDeck)  //  .json() will send proper headers in response so client knows it's json coming back
    })
}

//destroy a single deck by its ID
const destroy = (req, res) => {
    db.Deck.findByIdAndDelete(req.params.id, (error, deletedDeck) => {
        //if no deck is found, let the frontend know with the json error message
        if(!deletedDeck) return res.status(400).json({error: "Deck not found"})

        //if an error is produced, display it
        if(error) return res.status(400).json({error: error.message})

        return res.status(200).json({
            message: `Deck ${deletedDeck.name} deleted successfully! `
        })
    })
}

//updating a single deck
const update = (req, res) => {
    db.Deck.findByIdAndUpdate(
        req.params.id,
        {
            $set: req.body
        },
        {new: true},
        (err, updatedDeck) => {
            if(err) return res.status(400).json({error: err.message})
            return res.status(200).json(updatedDeck)
        }
    )
}

module.exports = {
    indexOfCards,
    indexOfDecks,
    create,
    destroy,
    update
}
