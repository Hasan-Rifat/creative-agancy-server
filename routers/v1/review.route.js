const express = require("express");
const review = require("../../controllers/review.controller");
const router = express.Router();

router.route("/").get(review.getReview).post(review.createReview);
router.route("/:id").put(review.updateReview).delete(review.deleteReview);

module.exports = router;
