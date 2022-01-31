const express = require('express');
const router = express.Router();

const {
    createOrder,
    getCurrentOrder
} = require("../controllers/orders_ctrl");

router.get("/", getCurrentOrder);

module.exports = router;