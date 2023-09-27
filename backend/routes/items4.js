const express = require('express')
const router = express.Router() // create a router
const itemsController = require('../controllers/items4')

// routes to controllers
// the '/items' route will run the getTodos controller
// which will fetch the data from your database
router.get('/items', itemsController.getBlogwithReply)
router.get('/item/:id', itemsController.getBlogwithReply)
router.post('/item', itemsController.createBlogwithReply)

module.exports = router