const mongoose = require('mongoose')
const orderSchema = mongoose.Schema(
    {
        user_id:{
            type: mongoose.Types.ObjectId,
            ref: 'User'
        },
        foods:[{
            food_id:{
                type: mongoose.Types.ObjectId,
                ref: 'Food'
            },
            amount:{
                type: Number,
                default: 0
            }
        }],
        table_id:{
            type: mongoose.Types.ObjectId,
            ref: 'Table'
        },
        note: String
    },
    {
        timestamps: true
    }
)