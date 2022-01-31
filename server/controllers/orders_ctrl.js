require('dotenv').config();
const Order = require('../models/order');

module.exports = {
    createOrder: async(req, res) => {
        console.log(req.body)
        const order = await Order.create();
        res.status(200).send(order)
    },
    getCurrentOrder: async(req, res) => {
        if (req.session.user) {
            const orderCheck = await Order.find({ userID: req.session.user.userID }).where("complete").equals(false);
            res.status(200).send(orderCheck)
        } else {
            res.status(200).send(false)
        }
    }
}