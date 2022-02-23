const { Router } = require("express");
const router = Router();

const {
  getUsers,
  createUser,
  updateUser,
  deleteUser,
  getUserById,
} = require("../controllers/users");

router.get("/getUsers", getUsers);
router.post("/createUser", createUser);
router.get("/getUser/:id", getUserById);
router.put("/updateUser/:id", updateUser);
router.delete("/deleteUser/:id", deleteUser);

module.exports = router;
