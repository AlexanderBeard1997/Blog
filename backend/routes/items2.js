const express = require('express')
const router = express.Router() // create a router
const itemsController = require('../controllers/items')

// routes to controllers
// the '/items' route will run the getTodos controller
// which will fetch the data from your database
router.get('/', itemsController.getUser)
router.get('/:id', itemsController.getUser)
router.post('/item', itemsController.createUser)
router.patch('/:id', itemsController.editUser)
router.delete('/:id', itemsController.deleteUser)
module.exports = router