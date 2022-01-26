const express = require("express");
const router = express.Router(); 

const {
    register,
    auth,
    logout,
    login
} = require('../controllers/session_ctrl');

router.post("/login", login);
router.post("/register", register);
router.get("/auth", auth);
router.get("/logout", logout);

module.exports = router;