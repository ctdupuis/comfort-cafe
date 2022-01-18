const User = require('../models/user');
const bcrypt = require('bcrypt');

module.exports = {
    getUsers: async(req, res) => {
        try {
            const users = await User.find();
            res.status(200).send(users);
        } catch (error) {
            res.status(400).send(error.message);
        }
    },
    register: (req, res) => {
        const salt = bcrypt.genSaltSync(10);
        res.status(200).send(req.body)
    },
    auth: (req, res) => {
       
    }
}