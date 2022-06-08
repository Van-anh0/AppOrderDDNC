const Order = require('../model/order')
const Food = require('../model/food')
const Category = require('../model/category')

const orderController = {
    createOrder: async (req, res) => {
        const {user_id , table, foods, note} = req.body
        const newOrder = new Order({user_id, foods, table,foods, note})
        await newOrder.save()
        return res.json({msg: 'success', order: newOrder._doc})
    },
    getOrderUser: async (req, res) =>{
        const {user_id} = req.body
        const order = await Order.findOne().sort('-created_at')
        return res.json({
            msg: 'success',
            order: order._doc
        })
    },
    addFoodToOrder: async (req, res) => {
        const {food_id, food_amount=1, order_id} = req.body
        const order = await Order.findOne({_id: order_id})
        let edit = flase
        order.foods = order.foods.map(e => {
            if(e.food_id == food_id) {
                edit = true
                e.amount += food_amount
            }
            return e
        })
        if(!edit){
            order.foods.push({food_id, amount: food_amount})
        }
        await order.save()
        return res.json({msg: 'success'})
    },
    removeFoodToOrder: async (req, res) => {
        const {food_id, order_id} = req.body
        const order = await Order.findOne({_id: order_id})
        order.foods = order.foods.filter( e => e.food_id !== food_id)
        await order.save()
        return res.json({msg: 'success'})
    },
}

module.exports = orderController