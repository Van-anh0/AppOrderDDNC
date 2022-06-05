const express = require('express');
const user = require('./model/user.js');
const users = require('./Data/users.js');
const category = require('./model/category.js');
const categories = require('./Data/category.js');

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

module.exports = ImportData;