const mongoose = require("mongoose")

const Schema = mongoose.Schema

const replySchema = new Schema({
    text: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model("replies", replySchema)