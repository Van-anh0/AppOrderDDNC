const mongoose = require('mongoose')
const reiviewSchema = mongoose.Schema(
    {
        user_id: {
            type: mongoose.Types.ObjectId,
            ref: 'User'
        },
        food_id:{
            type: mongoose.Types.ObjectId,
            ref: 'Food'
        },
        description:{
            type: String
        },
        rate:{
            type: Number,
            min: 0,
            max: 5
        }
    }, {timestamps:true}
)