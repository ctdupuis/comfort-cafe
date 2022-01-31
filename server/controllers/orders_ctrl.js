require('dotenv').config();
const Order = require('../models/order');

module.exports = {
    createOrder: async(req, res) => {

    },
    getCurrentOrder: async(req, res) => {
        res.status(200).send("Current order endpoint hit")
    }
}