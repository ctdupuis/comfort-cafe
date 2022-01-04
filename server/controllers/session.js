

module.exports = {
    loginUser: (req, res) => {
        if (req.body.username === username && req.body.password === password) {
            session = req.session;
            session.userId = req.body.username;
            console.log(req.session);
            res.status(200).send(`${username} has succesfully logged in`, req.session);
        } else {
            res.status(400).send("invalid username or password");
        }
    }
}