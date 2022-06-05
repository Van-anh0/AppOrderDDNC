const express = require('express');
const user = require('./model/user.js');
const users = require('./Data/users.js');
const category = require('./model/category.js');
const categories = require('./Data/category.js');
const table = require('./model/table.js');
const tables = require('./Data/table.js');
const food = require('./model/food.js');
const products = require('./Data/products.js');
const asyncHandler = require('express-async-handler');

const ImportData = express.Router();

ImportData.post(
    "/users",
    asyncHandler(async(req, res) => {
        await user.remove({});
        const importUsers = await user.insertMany(users);
        res.send({importUsers});
    })
)

ImportData.post(
    "/categories",
    asyncHandler(async(req, res) => {
        await category.remove({});
        const importCategories = await category.insertMany(categories);
        res.send({importCategories});
    })
)

ImportData.post(
    "/table",
    asyncHandler(async(req, res) => {
        await table.remove({});
        const importTable = await table.insertMany(tables);
        res.send({importTable});
    })
)

ImportData.post(
    "/products",
    asyncHandler(async(req, res) => {
        await food.remove({});
        const importProducts = await food.insertMany(products);
        res.send({importProducts});
    })
)

module.exports = ImportData;