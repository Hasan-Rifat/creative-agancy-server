// payment
const express = require("express");
const router = express.Router();
const payment = require("../../controllers/payment.controller");

// payment
router.route("/").post(payment.paymentMethod);

router.post("/payment", async (req, res) => {
  const booking = req.body;
  const result = await paymentCollection.insertOne(booking);
  res.send(result);
});

module.exports = router;
