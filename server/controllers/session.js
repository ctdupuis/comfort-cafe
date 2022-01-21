require('dotenv').config();
const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
const User = require('../models/user');
const db = mongoose.createConnection(process.env.CONNECTION_URL);


module.exports = {
    getUsers: async(req, res) => {
        try {
            const users = await User.find();
            res.status(200).send(users);
        } catch (error) {
            res.status(400).send(error.message);
        }
    },
    register: async(req, res) => {
        const userObject = req.body.userdata;
        const salt = bcrypt.genSaltSync(10);
        const securePassword = bcrypt.hashSync(userObject.password, salt);
        userObject.password = securePassword;
        const newUser = new User(userObject);
        const createdUser = await db.collection('users').insertOne(newUser).catch(err => console.log(err))
        res.status(200).send(createdUser);
    },
    auth: (req, res) => {
       if (req.session.user_id) {
           res.status(200).send({ auth: true })
       } else {
           res.status(200).send({ auth: false })
       }
    },
    logout: (req, res) => {

    }
}