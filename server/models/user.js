const { Schema } = require('mongoose');
const ObjectId = Schema.ObjectId;
const mongoose = require('mongoose');

const UserSchema = new Schema({
    email: {
        type: String,
        required: true,
        index: {
          unique: true,
          sparse: true
        }
    },
    password: {
        type: String,
        required: true
    },
    name: {
        first: String,
        last: String
    },
    admin: {
        type: Boolean,
        required: true,
        default: false
    },
    address: {
        street: String,
        city: String,
        state: String,
        zip: String
    },
    dob: {
        type: Date,
        required: true
    }
})

const User = mongoose.model("User", UserSchema);

module.exports = User;