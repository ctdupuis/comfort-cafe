const express = require("express");
const router = express.Router(); 

const {
    getUsers,
    register,
    auth
} = require('../controllers/session');

router.get("/", getUsers);
router.post("/register", register);
router.get("/auth", auth);

module.exports = router;