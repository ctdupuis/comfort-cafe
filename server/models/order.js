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
        get: v => calculateSubtotal(v, this.items)
    },
    total: {
        type: mongoose.Types.Decimal128,
        required: true
    },
    confirmation: {
        type: String
    }
})


// OrderSchema.virtual('subtotal').set(function() {
//     let pricesCombined = this.items.map(item => item.price).reduce((prev, current) => prev += current);
//     let subtotal = Math.round(pricesCombined * 100) / 100;
//     this.subtotal = subtotal;
// })
function calculateSubtotal(value, items) {
    let pricesCombined = items.map(item => item.price).reduce((prev, current) => prev += current);
    let pricesRounded = Math.round(pricesCombined * 100) / 100
    value = pricesRounded;
}

const Order = mongoose.model("Order", OrderSchema);


module.exports = Order;