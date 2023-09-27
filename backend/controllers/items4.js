// handler functions that will be executed 

const BlogwithReply = require("../models/blogWithReply")

const getBlogsWithReply = async (req, res) => {
    // find all items from a mongoose Model method 
    const items = await BlogsWithReply.find({})
    // respond with an object that has a message and the items from the DB
    res.json({
        message: "all items",
        blogsWithReply: items
    })
}

const getBlogWithReply = async (req, res) => {
    // get id from ':id' param from the route (the :id in the route path)
    const { id } = req.params
    // find todo with Model.findById()
    const blogWithReply = await BlogWithReply.findById(id)
    // response (res) with .json with the todo found
    res.status(200).json(blogWithReply)
}

const createBlogWithReply = async (req, res) => {
    // get the text from the req.body
    const {title } = req.body
    console.log(text)
    // create new todo object with model
const blogWithReplyObj = new BlogWithReply({
    text
})
    // await for it to be saved
    const newBlogWithReply = await blogWithReplyObj.save()
    // respond with json()
    res.status(200).json(newBlogWithReply)
}

module.exports = {
    createBlogWithReply,
    getBlogsWithReply,
    getBlogWithReply
}