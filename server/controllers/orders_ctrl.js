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
            const orderCheck = await Order.find({ userID: req.session.user._id }).where("complete").equals(false);
            if (orderCheck.length === 0) {
                res.status(200).send(false)
            }
            res.status(200).send(orderCheck.pop())
        } else {
            res.status(200).send(false)
        }
    }
}