const Food = require("../model/food")
const Category = require('../model/category')

class getApi{
    constructor(query, queryString) {
        this.query = query
        this.queryString = queryString
    }
    sort( fieldSort) {
        this.query.sort(fieldSort)
        return this
    }
    paginating(){
        const page = this.queryString.page * 1||1
        const limit = this.queryString.limit *1 || 9
        const skip = (page-1)*limit
        this.query = this.query.skip(skip).limit(limit)
        return this
    }
}

const foodCtrl = {
    addFood:async  (req, res) => {
        const {name, description, category, price, image} = req.body
        const newFood = new Food({name, description, category, price, image})
        try {
            await newFood.save()
            const category =await Category.findOne({title: category})
            category.foods++
            await category.save()
            return res.status(400).json({msg: 'success'})
        } catch(err){ return res.status(500).json({msg: err.message})}
    },
    getMostFood: async (req, res) => {
        const feature = new getApi(Food.find().sort('-rate -count')).paginating()
        const foods = await feature.query()
        return res.json({
            foods: foods._doc
        })
    },
    getFoodById: async (req, res) => {
        const {_id } = req.body
        const food = await Food.findOne({_id: _id})
        if(!food) return res.status(400).json({msg: "san pham khong ton tai"})
        return res.json({
            msg: 'success',
            food: food._doc
        })
    },
    getFoodByCategory: async (req, res) => {
        const {category} = req.body
        const foods = await Category.find({category: category})
        return res.json({foods})
    }
}
module.exports = foodCtrl