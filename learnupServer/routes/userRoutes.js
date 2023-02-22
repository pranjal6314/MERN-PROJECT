import express from "express";
import {
  login,
  register,
  logout,
  getMyProfile,
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
export default router;
