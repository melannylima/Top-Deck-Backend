const db = require('../models')

// get all the cards 
const index = (req, res) => {
    db.Card.find({}, (err, cards) => {
        if(err) return res.status(404).json({error: err.message})
        return res.status(200).json({
            cards,
            requestedAt: new Date().toLocaleDateString()
        })
    })
}

// get a card by Id 
// this will return an array and we only need one card by ID
const getCardById = (req, res) => {
    db.Card.find({
        id: req.body.id
    }, (err, card) => {
        if(err) return res.status(404).json({error: err.message})
        return res.status(200).json({
            card,
            requestedAt: new Date().toLocaleDateString()
        })
    })
}


// create a Card in the deck with req.body - 
const create = (req, res) => {
    db.Card.create(req.body, (err, createdCard) => {
        if(err) return res.status(404).json({error: err.message})
        return res.status(200).json(createdCard)  //  .json() will send proper headers in response so client knows it's json coming back
    })
}

//destroy a single Card by its ID from the deck
const destroy = (req, res) => {
    db.Card.findByIdAndDelete(req.params.id, (error, deletedCard) => {
        //if no Card is found, let the frontend know with the json error message
        if(!deletedCard) return res.status(400).json({error: "Card not found"})
        //if an error is produced, display it
        if(error) return res.status(400).json({error: error.message})
        return res.status(200).json({
            message: `Card ${deletedCard.name} deleted successfully! `
        })
    })
}


module.exports = {
    index,
    create,
    destroy,
    getCardById
}