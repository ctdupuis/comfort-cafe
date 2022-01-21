const express = require("express");
const router = express.Router(); 

const {
    getUsers,
    register,
    auth,
    logout
} = require('../controllers/session');

router.get("/", getUsers);
router.post("/register", register);
router.get("/auth", auth);
router.get("/logout", logout);

module.exports = router;