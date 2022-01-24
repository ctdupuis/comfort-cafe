const { Schema } = require('mongoose');
const ObjectId = Schema.ObjectId;
const mongoose = require('mongoose');

const OrderSchema = new Schema({
    date: {
        type: Date,
        required: true
    },
    user: {
        type: ObjectId,
        ref: 'User' 
    }
})




const Order = mongoose.model("Order", OrderSchema);

module.exports = Order;