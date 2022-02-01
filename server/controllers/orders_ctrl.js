require('dotenv').config();
const Order = require('../models/order');
const Item = require("../models/item");

module.exports = {
    createOrder: async(req, res) => {
        const { _id, total, subtotal, date} = req.body;
        const newOrder = new Order({userID: _id, total: total, subtotal: subtotal, date: date});
        try {
            const insertion = await Order.create(newOrder);
            res.status(200).send(insertion);
        } catch (err) {
            console.log("Error:", err)
        }
    },
    getCurrentOrder: async(req, res) => {
        if (req.session.user) {
            const orderCheck = await Order.find({ userID: req.session.user._id }).where("complete").equals(false).populate('items');
            let response;
            if (orderCheck.length === 0) {
                response = false;
                res.status(200).send(response);
            } else {
                response = orderCheck.pop();
                res.status(200).send(response);
            }
        } else {
            res.status(200).send(false)
        }
    },
    updateOrder: async(req, res) => {
        const item = await Item.find({ _id: req.body._id });
        const order = await Order.findOneAndUpdate({ _id: req.params.id}, { $push: { items: item }}).populate('items');
        res.status(200).send(order);
    }
}