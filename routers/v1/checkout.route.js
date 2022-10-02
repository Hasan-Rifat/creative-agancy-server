const express = require("express");
const router = express.Router();
const checkout = require("../../controllers/checkout.controllers");

router.route("/").get(checkout.getCheckout).post(checkout.createCheckout);

router
  .route("/:id")
  .get(checkout.getSingleCheckout)
  .put(checkout.updateCheckout)
  .delete(checkout.deleteCheckout);

module.exports = router;
