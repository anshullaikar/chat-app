const mongoose = require('mongoose');

const { Schema } = mongoose;


const person = new Schema({
    username:String,
    // channels:[
    //     {
    //     person:{
    //         type:Schema.Types.ObjectId,
    //         ref:'Person'
    //     },
    //     chat:{
    //     type:Schema.Types.ObjectId,
    //     ref:'Channel'
    // }}]
    channels:[
        {
            type:Schema.Types.ObjectId,
            ref:'Channel'
        }]
})

module.exports = mongoose.model('Person',person);