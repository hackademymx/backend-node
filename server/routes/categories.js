const { Router } = require("express");
const router = Router();

const {
  getCategories,
  getCategoryById,
  createCategory,
  updateCategory,
  deleteCategory,
} = require("../controllers/categories");

router.get("/getCategories", getCategories);
router.post("/createCategory", createCategory);
router.get("/getCategory/:id", getCategoryById);
router.put("/updateCategory/:id", updateCategory);
router.delete("/deleteCategory/:id", deleteCategory);

module.exports = router;
