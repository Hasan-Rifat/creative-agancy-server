const express = require("express");
const router = express.Router();
const order = require("../../controllers/oder.controller");

// url => http://localhost:5000/api/v1/order
// url => http://localhost:5000/api/v1/order/id

router.route("/").get(order.getOrder).post(order.createOrder);

router
  .route("/:id")
  .get(order.getSingleOrder)
  .patch(order.updateOrder)
  .delete(order.deleteOrder);

module.exports = router;
