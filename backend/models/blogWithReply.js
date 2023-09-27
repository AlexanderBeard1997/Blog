const mongoose = require('mongoose')

 

// get schema from mongoose object

const Schema = mongoose.Schema

// what the data will look like

const blogWithReplySchema = new Schema({

    text: {

        type: String,

        required: true

    },

  

    

})

 

module.exports = mongoose.model('blogWithReply', blogWithReplySchema)