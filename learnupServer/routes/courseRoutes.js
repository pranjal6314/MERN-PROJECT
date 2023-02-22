import express from "express";
import {
  addLecture,
  getAllCourses,
  getCourseLectures,
} from "../controllers/courseController.js";
import { createCourse } from "../controllers/courseController.js";
import singleUpload from "../middlewares/multer.js";

const router = express.Router();

//get all courses without lectures
router.route("/courses").get(getAllCourses);
//create a course only admin
router.route("/createcourse").post(singleUpload, createCourse);
//get all course lectures
router.route("/course/:id").get(getCourseLectures).post(addLecture);
export default router;
