const express = require("express");
const {
  makeAdmin,
  deleteAdmin,
  getAdmin,
} = require("../../controllers/admin.controller");
const router = express.Router();

// url => https://creative-agancy-server.vercel.app/api/v1/admin/email
// url => https://creative-agancy-server.vercel.app/api/v1/admin/cequcyv@mailinator.com

router.route("/:email").get(getAdmin).put(makeAdmin).delete(deleteAdmin);

module.exports = router;
