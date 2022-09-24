const express = require("express")
const router = express.Router()

const ctrls = require("../controllers")
//google- RESTful api design-dont put new edit delete after /cards
//Create Deck (post/create) -- /deck/new
router.post("/decks", ctrls.lists.create)
//See Cards in Deck (get/read) -- /deck
router.get("/decks", ctrls.lists.indexOfDecks)
//Update Deck (put/update) -- /deck/edit
router.put("/decks/:id", ctrls.lists.update)
//Remove card from deck (delete) -- /deck/cards/:id/delete
router.delete("/cards/:id", ctrls.lists.destroy)
//See card details (get/read) -- /cards/:id
router.get("/cards/:id", ctrls.cards.getCardById)
//See/Browse cards outside of deck (get/read) -- /cards
router.get("/cards", ctrls.cards.index)
//Create a card (post/create) --
router.post("/cards", ctrls.lists.create)
//Show cards in a deck
//router.get("/decks/:id/cards", ctrls.lists.listCardsByDeckId)


// Stretch Goal Routes:
// Delete deck (delete) -- /deck/delete
// Create account (post/create) -- /account/new
// Update shopping cart (put/update) -- /cart
// Update card tag (put/update) -- /card/:id/edit


module.exports = router;