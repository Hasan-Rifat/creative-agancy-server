const express = require("express");
const {
  makeAdmin,
  deleteAdmin,
} = require("../../controllers/admin.controller");
const router = express.Router();

// url => http://localhost:5000/api/v1/admin/email

router.route("/:email").patch(makeAdmin).delete(deleteAdmin);

module.exports = router;
