import express from "express";
import { register } from "../controllers/userController.js";
const router = express.Router();

//to register a new user
router.route("/register").post(register);
//login
//logout
//get my profile
export default router;
