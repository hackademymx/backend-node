const { Router } = require("express");
const router = Router();

const {
  getCustomers,
  getCustomerById,
  updateCustomer,
  buyProductByCustomer,
  getProductsByCustomer,
} = require("../controllers/customers");

router.get("/getCustomers", getCustomers);
router.get("/getCustomer/:id", getCustomerById);
router.put("/updateCustomer/:id", updateCustomer);

router.post("/buy", buyProductByCustomer);
router.get("/buy/:customerId", getProductsByCustomer);

module.exports = router;
