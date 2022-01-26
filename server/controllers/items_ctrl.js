require('dotenv').config();
const mongoose = require('mongoose');
const Item = require('../models/item');
const db = mongoose.createConnection(process.env.CONNECTION_URL);

module.exports = {
    getItems: async(req, res) => {
        const items = await Item.find();
        res.status(200).send(items);
    }
}