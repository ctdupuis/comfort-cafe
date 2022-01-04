const express = require('express');
const cors = require('cors');

const app = express();

const sessions = require('express-session');
const cookieParser = require('cookie-parser');

require("dotenv").config();
require("./db/db_setup");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(cookieParser());

app.use(express.static(__dirname));

const oneDay = 1000 * 60 * 60 * 24;

app.use(sessions({
    secret: "asldfkjoawruhfou3qrfaslfjkoiwehjf",
    saveUnitialized: true,
    cookie: { maxAge: oneDay },
    resave: false
}))


const {
    loginUser
} = require("./controllers/session")

app.post("/login", loginUser)

app.get("logout", (req, res) => {
    req.session.destroy();
    res.status(200).send("Succesfully logged out");
})

const PORT = process.env.PORT || 4000

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));