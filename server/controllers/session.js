const User = require('../models/user');

module.exports = {
    getUsers: async(req, res) => {
        try {
            const users = await User.find();
            res.status(200).send(users);
        } catch (error) {
            res.status(400).send(error.message);
        }
    }
}