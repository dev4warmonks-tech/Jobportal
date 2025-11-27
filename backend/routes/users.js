
const express = require("express");
const Users = require("../models/Users");
const router = express.Router();

// CREATE user
router.post("/", async (req, res) => {
  const users = await Users.create(req.body);
  res.json(users);
});

// READ all users
router.get("/", async (req, res) => {
  const users = await Users.find();
  res.json(users);
});

// READ single user
router.get("/:id", async (req, res) => {
  const users = await Users.findById(req.params.id);
  res.json(users);
});

// UPDATE user
router.put("/:id", async (req, res) => {
  const users = await Users.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(users);
});

// DELETE user
router.delete("/:id", async (req, res) => {
  await Users.findByIdAndDelete(req.params.id);
  res.json({ message: "User deleted" });
});

module.exports = router;