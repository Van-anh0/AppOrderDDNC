const Category = require('../model/category')

const categoryCtrl = {
    addCategory: async (req, res) => {
        const {title, image} = req.body
        const newCategory = new Category({title, image})
        try{
            await newCategory.save()
            return res.json({
                msg: 'success',
                category: newCategory
            })
        } catch(err) { return res.status(500).json({msg: err.message})}
    },
    getCategories: async (req, res) => {
        const catergories = await Category.find().all() 
        return res.json({msg: 'success', categories: catergories._doc})
    }
}
module.exports = categoryCtrl