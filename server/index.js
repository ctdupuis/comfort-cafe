const express = require('express');
const cors = require('cors');

const app = express();

const sessions = require('express-session');
const cookieParser = require('cookie-parser');

const { db } = require('./db/connection.js')
db();

require("dotenv").config();

let corsOptions = {
    origin: ['http://localhost:3000', 'https://comfort-cafe.herokuapp.com'],
    optionsSuccessStatus: 200,
    methods: ["GET, POST, PUT, DELETE"],
    credentials: true
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(express.static(__dirname));

let session = {
    secret: process.env.SESSION_SECRET,
    cookie:  { maxAge: 1000 * 60 * 60 },
    saveUninitialized: false,
    resave: false
};

app.use(sessions(session));


// Routers
const userRouter = require("./routes/user_routes")
const itemRouter = require("./routes/item_routes");
app.use("/users", userRouter);
app.use("/items", itemRouter);




const PORT = process.env.PORT || 4000

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));