import express from "express";
import { getAllCourses } from "../controllers/courseController.js";
import { createCourse } from "../controllers/courseController.js";

const router = express.Router();

//get all courses without lectures
router.route("/courses").get(getAllCourses);
//create a course only admin
router.route("/createcourse").post(createCourse);
export default router;
