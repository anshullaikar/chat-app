const mongoose = require('mongoose');

const { Schema } = mongoose;


const newChannel = new Schema({
    name:String,
    messageList:[{
        text:{
            type:String
        },
        username:{
            type:String
        }
    }]
})

module.exports = mongoose.model('NewChannel',newChannel);