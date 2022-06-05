const mongoose = require('mongoose')
const foodSchema = mongoose.Schema(
    {
        title:{
            type: String,
            required: true,
        },
        description:{
            type: String,
        },
        category: {
            type: mongoose.Types.ObjectId,
            ref: 'Category'
        }, 
        rating:{
            rate:{
                type: Number,
                min: 0,
                max: 5,
                default: 0
            },
            count: {
                type: Number,
                default: 0
            }
        } 
    },
    {timestamps: true}
)
module.exports = mongoose.model('Food', foodSchema)
