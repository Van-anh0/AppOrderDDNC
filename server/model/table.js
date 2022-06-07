const mongoose = require('mongoose')
const tableSchema = mongoose.Schema(
    {
        id:{
            type: Number,
            required: true
        },
        status: {
            type: Boolean,
            required: true
        }
    },
    {timestamps: true}
)
module.exports = mongoose.model('Table', tableSchema)