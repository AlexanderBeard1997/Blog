// handler functions that will be executed 

const Reply = require("../models/replies")

const getReplies = async (req, res) => {
    // find all items from a mongoose Model method 
    const items = await Reply.find({})
    // respond with an object that has a message and the items from the DB
    res.json({
        message: "all items",
        replies: items
    })
}

const getReply = async (req, res) => {
    // get id from ':id' param from the route (the :id in the route path)
    const { id } = req.params
    // find todo with Model.findById()
    const reply = await Reply.findById(id)
    // response (res) with .json with the todo found
    res.status(200).json(reply)
}

const createReply = async (req, res) => {
    // get the text from the req.body
    const {text} = req.body
    console.log(text)
    // create new todo object with model
const replyObj = new Reply({
    text
})
    // await for it to be saved
    const newReply = await replyObj.save()
    // respond with json()
    res.status(200).json(newReply)
}

const editReply = async (req, res) => {
    // get id from ':id' param from the route
    const { id } = req.params
    // use mongoose model method findByIdAndUpdate
    let reply = await Reply.findByIdAndUpdate(id, { text: req.body.text })

    res.status(200).json(reply)
}

const deleteReply = async (req, res) => {
    // get id from ':id' param from the route
    const { id } = req.params
    // use mongoose model method findByIdAndDelete
   let reply = await Reply.findByIdAndDelete(id)

    res.status(200).json(reply)
   
}

module.exports = {
    createReply,
    getReplies,
    editReply,
    deleteReply,
    getReply
}