const mongoose = require('mongoose');
const { Schema } = require('mongoose');
const ObjectId = Schema.ObjectId;


const OrderSchema = new Schema({
    date: {
        type: Date,
        required: true
    },
    user: {
        type: ObjectId,
        ref: 'User' 
    },
    items: [{
        type: ObjectId,
        ref: 'Item'
    }],
    subtotal: {
        type: mongoose.Types.Decimal128,
        required: true
    },
    total: {
        type: mongoose.Types.Decimal128,
        required: true
    }
})




const Order = mongoose.model("Order", OrderSchema);

module.exports = Order;