const mongoose = require('mongoose');
const { Schema } = require('mongoose');
const ObjectId = Schema.ObjectId;


const OrderSchema = new Schema({
    date: {
        type: Date,
        required: true
    },
    userID: {
        type: ObjectId,
        ref: 'User' 
    },
    items: [{
        type: ObjectId,
        ref: 'Item'
    }],
    complete: {
        type: Boolean,
        default: false
    },
    subtotal: {
        type: mongoose.Types.Decimal128,
        required: true
    },
    tax: {
        type: mongoose.Types.Decimal128,
        required: true
    },
    total: {
        type: mongoose.Types.Decimal128,
        required: true
    },
    confirmation: {
        type: String
    }
})


const Order = mongoose.model("Order", OrderSchema);


module.exports = Order;