const express = require('express')
const router = express.Router() // create a router
const itemsController = require('../controllers/items3')

// routes to controllers
// the '/items' route will run the getTodos controller
// which will fetch the data from your database
router.get('/items', itemsController.getReplies)
router.get('/item/:id', itemsController.getReply)
router.post('/item', itemsController.createReply)
router.patch('/item/:id', itemsController.editReply)
router.delete('/item/:id', itemsController.deleteReply)
module.exports = router