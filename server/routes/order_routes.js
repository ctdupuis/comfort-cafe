const express = require('express');
const router = express.Router();

const {
    createOrder,
    getCurrentOrder,
    updateOrder,
    completeOrder
} = require("../controllers/orders_ctrl");

router.get("/", getCurrentOrder);
router.post("/", createOrder);
router.put("/:id/complete", completeOrder);
router.put("/:id", updateOrder);

module.exports = router;