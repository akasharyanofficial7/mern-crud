const express = require("express");
const {
  createUser,
  getAllUsers,
  getOneUser,
  deleteUser,
  updateUser,
} = require("../controllers/userController");
const router = express.Router();

router.post("/create", createUser);
router.get("/getall", getAllUsers);
router.get("/getone/:id", getOneUser);
router.delete("/delete/:id", deleteUser);
router.put("/update/:id", updateUser);

module.exports = router;
