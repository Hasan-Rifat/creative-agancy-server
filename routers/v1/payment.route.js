// payment
const express = require("express");
const router = express.Router();
const payment = require("../../controllers/payment.controller");

// url => http://localhost:5000/api/v1/create-payment-intent
// payment
router.route("/").post(payment.paymentMethod);

module.exports = router;
