const express = require("express");
const router = express.Router(); 

const {
    getUsers
} = require('../controllers/session');

router.get("/", getUsers);

module.exports = router;