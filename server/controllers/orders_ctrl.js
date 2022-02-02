require('dotenv').config();
const Order = require('../models/order');
const Item = require("../models/item");
const uniqid = require('uniqid');

module.exports = {
    createOrder: async(req, res) => {
        const { _id, total, tax, subtotal, date} = req.body;
        const newOrder = new Order({userID: _id, total: total, subtotal: subtotal, tax: tax, date: date});
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
        const qty = req.body.qty;
        const id = req.params.id;
        const item = await (await Item.find({ _id: req.body._id })).pop();
        const updates = await runUpdates(qty, id, item);
        const updated = await Order.findById(req.params.id).populate('items');
        res.status(200).send(updated);
    },
    completeOrder: async(req, res) => {
        const id = req.params.id;
        const confirmation = uniqid();
        const update = await Order.findOneAndUpdate({ _id: id}, {complete: true, confirmation: confirmation});
        const updated = await Order.findById(req.params.id).populate('items');
        res.status(200).send(updated);
    }
}

// This adds items to the order based off the quantity
const runUpdates = async(qty, id, item) => {
    for (let i = 0; i < qty; i++) {
        const updates = await Order.findOneAndUpdate({ _id: id}, { $push: { items: item }});
    }
    const order = await Order.findById(id).populate('items');
    let pricesCombined = order.items.map(item => parseFloat(item.price)).reduce((prev, current) => prev += current);
    const subtotal = Math.round(pricesCombined * 100) / 100;
    const tax = Math.round((subtotal * .0945) * 100) / 100;
    const total = Math.round((subtotal + tax) * 100) / 100;
    const finalUpdate = await Order.findOneAndUpdate({_id:id}, {subtotal: subtotal, tax: tax, total: total})
}