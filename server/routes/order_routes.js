const express = require('express');
const router = express.Router();

const {
    createOrder,
    getCurrentOrder
} = require("../controllers/orders_ctrl");

router.get("/", getCurrentOrder);
router.post("/", createOrder);

module.exports = router;