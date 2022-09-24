// you can create res.send instead of writing all the other info in the controllers 
// if you dont res.send you can comment out the extra functionality 

module.exports = {
    lists: require('./lists.ctrls.js'),
    cards: require('./cards.ctrls.js')
}

