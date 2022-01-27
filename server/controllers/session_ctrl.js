require('dotenv').config();
const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
const User = require('../models/user');
// const db = mongoose.createConnection(process.env.CONNECTION_URL);
const { db } = require('../db/connection');
const salt = bcrypt.genSaltSync(10);

module.exports = {
    login: async(req, res) => {
        const { email, password } = req.body.userdata;
        const user = await db.collection('users').findOne({ email: email });
        const authenticated = bcrypt.compareSync(password, user.password);
        if (authenticated) {
            let secureUser = {...user}
            delete secureUser.password
            req.session.user = secureUser;
            res.status(200).send(secureUser);
        } else {
            res.status(400).send({ alert: "Invalid username or password"})
        }
    },
    register: async(req, res) => {
        const userObject = Object.assign({}, req.body.userdata);
        const securePassword = bcrypt.hashSync(userObject.password, salt);
        userObject.password = securePassword;
        const newUser = new User(userObject);
        const insertion = await db.collection('users').insertOne(newUser)
        .catch(err => res.status(400).send( {alert: err} ));
        const createdUser = await db.collection('users').findOne({ _id: insertion.insertedId });
        delete createdUser.password;
        req.session.user = createdUser;
        res.status(200).send(createdUser);
    },
    auth: (req, res) => {
       if (req.session.user) {
           res.status(200).send({ auth: req.session.user })
       } else {
           res.status(200).send({ auth: false })
       }
    },
    logout: (req, res) => {
        req.session.destroy();
        res.status(200).send({alert: "Logged out successfully"})
    }
}