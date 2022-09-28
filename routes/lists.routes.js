const express = require("express")
const router = express.Router()

const ctrls = require("../controllers")
//google- RESTful api design-dont put new edit delete after /cards
//all below routes tested and works

//Create Deck (post/create) -- /deck/new
router.post("/decks", ctrls.lists.create)
//See Decks (get/read) -- /deck
router.get("/decks", ctrls.lists.indexOfDecks)
//Update Deck (put/update) -- /deck/edit
router.put("/decks/:id", ctrls.lists.update)
//Remove a deck (delete) -- /deck/:id/delete
router.delete("/decks/:id", ctrls.lists.destroy)

//Create a card (post/create) --
router.post("/cards", ctrls.cards.create)
//See card details (get/read) -- /cards/:id
router.get("/cards/:id", ctrls.cards.getCardById)
//See/Browse all cards (get/read) -- /cards
router.get("/cards", ctrls.cards.index)
//See all cards in your deck (get/read) -- /cards
router.get("/decks/:deckId/cards", ctrls.cards.indexOfCardsInDeck)
//Remove card from deck (delete) -- /deck/cards/:id/delete
router.delete("/cards/:id", ctrls.cards.destroy)

// *********look into a route for the landing page 
// ****might need a controller for the pop out pages in the wireframes


// Stretch Goal Routes:
// Delete deck (delete) -- /deck/delete
// Create account (post/create) -- /account/new
// Update shopping cart (put/update) -- /cart
// Update card tag (put/update) -- /card/:id/edit


module.exports = router;