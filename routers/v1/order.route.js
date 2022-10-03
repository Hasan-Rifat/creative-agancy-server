const express = require("express");
const router = express.Router();
const order = require("../../controllers/oder.controller");

// url => https://creative-agancy-server.vercel.app/api/v1/order
// url => https://creative-agancy-server.vercel.app/api/v1/order/id

router.route("/").get(order.getOrder).post(order.createOrder);

router.route("/:id").put(order.updateOrder).delete(order.deleteOrder);

router.route("/:email").get(order.getSingleOrder).delete(order.deleteUserOrder);

module.exports = router;
