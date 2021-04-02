const mongoose = require('mongoose');

const { Schema } = mongoose;


const message = new Schema({
    username:String,
    text:String,
})

module.exports = mongoose.model('Message',message);