const mongoose = require('mongoose');

const { Schema } = mongoose;


const teacher = new Schema({
    username:String,
    channels:[{
            person:{
                type:Schema.Types.ObjectId,
                refPath:'channels.onModel'
            },
            chat:{
            type:Schema.Types.ObjectId,
            ref:'NewChannel'
            },
            onModel:{
                type: String,
                required: true,
                enum: ['Student', 'Teacher']
            }
        }]
})

module.exports = mongoose.model('Teacher',teacher);