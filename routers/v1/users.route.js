const express = require("express");
const router = express.Router();
const user = require("../../controllers/users.controller");

// url => http://localhost:5000/api/v1/users
// url => http://localhost:5000/api/v1/users/email

router.route("/").get(user.usersGet).post(user.userCreate);
router
  .route("/:email")
  .get(user.userGet)
  .put(user.userUpdate)
  .delete(user.userDelete);

module.exports = router;
