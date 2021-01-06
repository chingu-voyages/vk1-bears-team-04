const express = require("express");
const userController = require("../controllers/userController");
const auth = require("../middlewares/auth");
const authAdmin = require("../middlewares/authAdmin");

const router = express.Router();

router.post("/register", userController.register);

router.post("/activation", userController.activateEmail);

router.post("/login", userController.login);

router.post("/refresh_token", userController.getAccessToken);

router.post("/forgot_password", userController.forgotPassword);

router.post("/reset_password", auth, userController.resetPassword);

router.get("/info", auth, userController.getUserInfo);

router.get("/all_info", auth, authAdmin, userController.getUserAllInfo);

router.get("/logout", userController.logout);

router.patch("/update", auth, userController.updateUser);

router.patch(
  "/update_role/:id",
  auth,
  authAdmin,
  userController.updateUserRole
);

router.delete("/delete/:id", auth, authAdmin, userController.deleteUser);

module.exports = router;
