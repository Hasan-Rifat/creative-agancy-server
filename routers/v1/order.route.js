const express = require("express");
const router = express.Router();
const order = require("../../controllers/oder.controller");

router.route("/").get(order.getOrder).post(order.createOrder);

router
  .route("/:id")
  .get(order.getSingleOrder)
  .put(order.updateOrder)
  .delete(order.deleteOrder);

module.exports = router;
