const { Schema } = require('mongoose');
const ObjectId = Schema.ObjectId;
const mongoose = require('mongoose');

const ItemSchema = new Schema({
    name: {
        type: String,
        required: true,
        index: {
            unique: true
        }
    },
    price: {
        type: Number,
        required: true
    },
    categories: {
        type: Array,
        required: true
    }
})

const Item = mongoose.model("Item", ItemSchema);

module.exports = Item;