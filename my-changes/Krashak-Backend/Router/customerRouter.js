const express = require("express");

const {
  createCustomer,
  getCustomers,
  getCustomer,
  updateCustomer,
  deleteCustomer,
} = require("../Controllers/customerController");

const router = express.Router();

router.post("/", createCustomer);

router.get("/", getCustomers);

router.get("/:id", getCustomer);

router.put("/:id", updateCustomer);

router.delete("/:id", deleteCustomer);

module.exports = router;