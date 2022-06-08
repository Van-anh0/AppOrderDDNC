const mongoose = require('mongoose')

const categorySchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: true
        },
        image:{
            type: String, 
            default: ''
        },
        foods:{
            type: Number,
            defualt: 0
        }
    },
    {timestamps: true}
)

module.exports = mongoose.model('Category', categorySchema)