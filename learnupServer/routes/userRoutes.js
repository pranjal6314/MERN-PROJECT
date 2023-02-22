import express from "express";
import {
  login,
  register,
  logout,
  getMyProfile,
  changePassword,
  updateProfile,
  updateProfilePicture,
  forgetPassword,
  resetPassword,
} from "../controllers/userController.js";
import { isAuthenticated } from "../middlewares/auth.js";
const router = express.Router();

//to register a new user
router.route("/register").post(register);
//login
router.route("/login").post(login);
//logout
router.route("/logout").get(logout);
//get my profile
router.route("/me").get(isAuthenticated, getMyProfile);
//change password
router.route("/changepassword").put(isAuthenticated, changePassword);
//update profile
router.route("/updateprofile").put(isAuthenticated, updateProfile);
//update profile picture
router
  .route("/updateprofilepicture")
  .put(isAuthenticated, updateProfilePicture);
//reset Password and forget password
router.route("/forgetpassword").post(forgetPassword);

router.route("/resetpassword/:token").put(resetPassword);
export default router;
