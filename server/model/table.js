const mongoose = require('mongoose')
const tableSchema = mongoose.Schema(
    {
        _id: {
            type: String,
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