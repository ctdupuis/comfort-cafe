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


// Routers
const userRouter = require("./routes/user_routes")
app.use("/users", userRouter);




const PORT = process.env.PORT || 4000

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));