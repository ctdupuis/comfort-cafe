require('dotenv').config();
const mongoose = require('mongoose');
const Item = require('../models/item');

module.exports = {
    getItems: async(req, res) => {
        const items = await Item.find({});
        res.status(200).send(items);
    }
}