const mongoose = require('mongoose')
const orderSchema = mongoose.Schema(
    {
        user_id:{
            type: mongoose.Types.ObjectId,
            ref: 'User'
        },
        food_id:[{
            type: mongoose.Types.ObjectId,
            ref: 'Food'
        }],
        table_id:{
            type: mongoose.Types.ObjectId,
            ref: 'Table'
        },
        status:{
            type: String,
            default: 'ordering',
            enum: ['ordering','pendding', 'ready', 'success', 'cancel']
        },
        note: String
    },
    {
        timestamps: true
    }
)