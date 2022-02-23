const { Router } = require("express");
const router = Router();

const {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/products");

router.get("/getProducts", getProducts);
router.post("/createProduct", createProduct);
router.get("/getProduct/:id", getProductById);
router.put("/updateProduct/:id", updateProduct);
router.delete("/deleteProduct/:id", deleteProduct);

module.exports = router;
