const express = require('express');
const router = express.Router();

const {
    createOrder,
    getCurrentOrder,
    updateOrder,
    completeOrder,
    getHistory
} = require("../controllers/orders_ctrl");

router.get("/", getCurrentOrder);
router.post("/", createOrder);
router.get("/history", getHistory);
router.put("/:id/complete", completeOrder);
router.put("/:id", updateOrder);

module.exports = router;