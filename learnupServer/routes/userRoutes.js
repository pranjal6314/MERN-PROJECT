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
  addToPlaylist,
  removeFromPlaylist,
  getAllUsers,
  updateRole,
  deleteUser,
  deleteMyProfile,
} from "../controllers/userController.js";
import { authorizeAdmin, isAuthenticated } from "../middlewares/auth.js";
import singleUpload from "../middlewares/multer.js";
const router = express.Router();

//to register a new user
router.route("/register").post(singleUpload, register);
//login
router.route("/login").post(login);
//logout
router.route("/logout").get(logout);
//get my profile
router.route("/me").get(isAuthenticated, getMyProfile);
//delete my profile
router.route("/me").delete(isAuthenticated, deleteMyProfile);
//change password
router.route("/changepassword").put(isAuthenticated, changePassword);
//update profile
router.route("/updateprofile").put(isAuthenticated, updateProfile);
//update profile picture
router
  .route("/updateprofilepicture")
  .put(isAuthenticated, singleUpload, updateProfilePicture);
//reset Password and forget password
router.route("/forgetpassword").post(forgetPassword);

router.route("/resetpassword/:token").put(resetPassword);
//add To Playlist
router.route("/addtoplaylist").post(isAuthenticated, addToPlaylist);
//delete form playlist
router.route("/removefromplaylist").delete(isAuthenticated, removeFromPlaylist);

//Admin Routes
router.route("/admin/users").get(isAuthenticated, authorizeAdmin, getAllUsers);
router
  .route("/admin/user/:id")
  .put(isAuthenticated, authorizeAdmin, updateRole)
  .delete(isAuthenticated, authorizeAdmin, deleteUser);
export default router;
