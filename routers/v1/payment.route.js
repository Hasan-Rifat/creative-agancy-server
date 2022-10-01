// payment
const express = require("express");
const router = express.Router();
const payment = require("../../controllers/payment.controller");

// url => https://creative-agancy-server.vercel.app/api/v1/create-payment-intent
// payment
router.route("/").post(payment.paymentMethod);

module.exports = router;
