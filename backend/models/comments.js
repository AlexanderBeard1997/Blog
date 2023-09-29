const mongoose = require('mongoose')

// get schema from mongoose object

const Schema = mongoose.Schema

// what the data will look like

const commentSchema = new Schema({
    comment: {

        type: String,

        required: true

    },
    blogId: {
        type: Schema.Types.ObjectId, // Use ObjectId to reference a blog
        ref: 'Blog', // Reference the Blog model
        required: true,
    },
    

 

})

module.exports = mongoose.model('comment', commentSchema)