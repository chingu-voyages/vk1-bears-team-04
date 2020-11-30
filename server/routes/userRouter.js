const express = require("express");
const userController = require("../controllers/userController");

const router = express.Router();

router.post("/register", userController.register);

router.post("/activation", userController.activateEmail);

module.exports = router;
