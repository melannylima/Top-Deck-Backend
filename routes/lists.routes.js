const express = require("express")
const router = express.Router()

const ctrls = require("../controllers")

//Create Deck (post/create) -- /deck/new
router.post("/deck/new", ctrls.list.create)
//See Cards in Deck (get/read) -- /deck
router.get("/deck", ctrls.list.index)
//See/Browse cards outside of deck (get/read) -- /cards
router.get("/cards", ctrls.list.index)
//Update Deck (put/update) -- /deck/edit
router.put("/deck/edit", ctrls.list.update)
//Remove card from deck (delete) -- /deck/cards/:id/delete
router.delete("/deck/cards/:id/delete", ctrls.list.destroy)
//See card details (get/read) -- /cards/:id
router.get("/cards/:id", ctrls.list.index)



// Stretch Goal Routes:
// Delete deck (delete) -- /deck/delete
// Create account (post/create) -- /account/new
// Update shopping cart (put/update) -- /cart
// Update card tag (put/update) -- /card/:id/edit


module.exports = router;