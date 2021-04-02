const mongoose = require('mongoose');

const { Schema } = mongoose;


const channel = new Schema({
    name:String,
    participants:[{
        id:{
            type:Schema.Types.ObjectId,
            ref:'Person'
        }
    }],
    messageList:[{
            type:Schema.Types.ObjectId,
            ref:'Message'
    }]
})

module.exports = mongoose.model('Channel',channel);