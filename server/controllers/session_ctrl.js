require('dotenv').config();
const bcrypt = require('bcrypt');
const User = require('../models/user');
const salt = bcrypt.genSaltSync(10);

module.exports = {
    login: async(req, res) => {
        const { email, password } = req.body.userdata;
        const user = await User.findOne({ email: email });
        const authenticated = bcrypt.compareSync(password, user.password);
        if (authenticated) {
            let secureUser = {...user["_doc"]};
            delete secureUser.password;
            req.session.user = secureUser;
            res.status(200).send(secureUser);
        } else {
            res.status(400).send({ alert: "Invalid username or password"})
        }
    },
    register: async(req, res) => {
        const { userdata } = req.body;
        const securePassword = bcrypt.hashSync(userdata.password, salt);
        userdata.password = securePassword;
        const newUser = new User(userdata);
        try {
            const insertion = await User.create(newUser);
            const secureUser = {...insertion["_doc"]};
            delete secureUser.password;
            req.session.user = secureUser;
            res.status(200).send(secureUser);
        } catch (err) {
            res.status(400).send({ alert: "Email already exists" });
        }
    },
    auth: (req, res) => {
       if (req.session.user) {
           res.status(200).send({ auth: req.session.user });
       } else {
           res.status(200).send({ auth: false });
       }
    },
    logout: (req, res) => {
        req.session.destroy();
        res.status(200).send({alert: "Logged out successfully"});
    }
}