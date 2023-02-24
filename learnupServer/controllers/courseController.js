import catchAsyncError from "../middlewares/catchAsyncError.js";
import { Course } from "../models/Course.js";
import getDataUri from "../utils/dataUri.js";
import ErrorHandler from "../utils/errorHandler.js";
import cloudinary from "cloudinary";
export const getAllCourses = catchAsyncError(async (req, res, next) => {
  const courses = await Course.find();
  res.status(200).json({
    success: true,
    courses,
  });
});
export const createCourse = catchAsyncError(async (req, res, next) => {
  const { title, description, category, createdBy } = req.body;
  if (!title || !description || !category || !createdBy)
    return next(new ErrorHandler("Please add all fields", 400));
  const file = req.file;
  const fileUri = getDataUri(file);
  const myCloud = await cloudinary.v2.uploader.upload(fileUri.content);
  await Course.create({
    title,
    description,
    category,
    createdBy,
    poster: { public_id: myCloud.public_id, url: myCloud.secure_url },
  });
  const courses = await Course.find().select("-lectures");
  res.status(201).json({
    success: true,
    message: "Course Created Successfully. You can add lectures now.",
  });
});
export const getCourseLectures = catchAsyncError(async (req, res, next) => {
  const course = await Course.findById(req.params.id);
  if (!course) return next(new ErrorHandler("Course not found", 404));
  course.views += 1;
  await course.save();
  res.status(200).json({
    success: true,
    lectures: course.lectures,
  });
});
export const addLecture = catchAsyncError(async (req, res, next) => {
  const { title, description } = req.body;
  const course = await Course.findById(req.params.id);
  if (!course) return next(new ErrorHandler("Course not found", 404));
  //upload video to cloudinary
  const file = req.file;
  const fileUri = getDataUri(file);
  //max size of video is 100mb
  const myCloud = await cloudinary.v2.uploader.upload(fileUri.content, {
    resource_type: "video",
  });
  course.lectures.push({
    title,
    description,
    video: {
      public_id: myCloud.public_id,
      url: myCloud.secure_url,
    },
  });
  course.numOfVideos = course.lectures.length;
  await course.save();
  res.status(200).json({
    success: true,
    message: "Lecture added successfully",
  });
});
export const deleteCourse = catchAsyncError(async (req, res, next) => {
  const { id } = req.params;
  const course = await Course.findById(id);
  if (!course) return next(new ErrorHandler("Course not found", 404));
  await cloudinary.v2.uploader.destroy(course.poster.public_id);
  for (let index = 0; index < course.lectures.length; index++) {
    const singleLecture = course.lectures[index];
    await cloudinary.v2.uploader.destroy(singleLecture.video.public_id, {
      resource_type: "video",
    });
  }
  await course.remove();
  res.status(200).json({
    success: true,
    message: "Course Deleted Successfully",
  });
});

export const deleteLecture = catchAsyncError(async (req, res, next) => {
  const { courseId, lectureId } = req.query;

  const course = await Course.findById(courseId);
  if (!course) return next(new ErrorHandler("Course not found", 404));

  const lecture = course.lectures.find((item) => {
    if (item._id.toString() === lectureId.toString()) return item;
  });
  await cloudinary.v2.uploader.destroy(lecture.video.public_id, {
    resource_type: "video",
  });

  course.lectures = course.lectures.filter((item) => {
    if (item._id.toString() !== lectureId.toString()) return item;
  });

  course.numOfVideos = course.lectures.length;

  await course.save();

  res.status(200).json({
    success: true,
    message: "Lecture Deleted Successfully",
  });
});
