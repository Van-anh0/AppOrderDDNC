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
        }
    },
    {timestamps: true}
)

module.exports = mongoose.model('Category', categorySchema)