import express from "express";
import {
  addLecture,
  deleteCourse,
  getAllCourses,
  getCourseLectures,
  deleteLecture,
} from "../controllers/courseController.js";
import { createCourse } from "../controllers/courseController.js";
import {
  authorizeAdmin,
  isAuthenticated,
  authorizeSubscribers,
} from "../middlewares/auth.js";
import singleUpload from "../middlewares/multer.js";

const router = express.Router();

//get all courses without lectures
router.route("/courses").get(getAllCourses);
//create a course only admin
router
  .route("/createcourse")
  .post(isAuthenticated, authorizeAdmin, singleUpload, createCourse);
//get all course lectures, add a lecture, delete a course only admin
router
  .route("/course/:id")
  .get(isAuthenticated, authorizeSubscribers, getCourseLectures)
  .post(isAuthenticated, authorizeAdmin, singleUpload, addLecture)
  .delete(isAuthenticated, authorizeAdmin, deleteCourse);
//delete a lecture only admin
router.route("/lecture").delete(isAuthenticated, authorizeAdmin, deleteLecture);
export default router;
