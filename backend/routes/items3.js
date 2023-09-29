const express = require('express')
const router = express.Router() // create a router
const itemsController = require('../controllers/items3')

// routes to controllers
// the '/items' route will run the getTodos controller
// which will fetch the data from your database
router.get('/items', itemsController.getComments)
router.get('/item/:id', itemsController.getComment)
router.post('/item', itemsController.createComment)
router.patch('/item/:id', itemsController.editComment)
router.delete('/item/:id', itemsController.deleteComment)
module.exports = router