import catchAsyncError from "../middlewares/catchAsyncError.js";
import ErrorHandler from "../utils/errorHandler.js";
import { sendEmail } from "../utils/sendEmail.js";
import { Stats } from "../models/Stats.js";
export const contact = catchAsyncError(async (req, res, next) => {
  const { name, email, message } = req.body;
  if (!name || !email || !message) {
    return next(new ErrorHandler("Please fill all the fields", 400));
  }
  const to = process.env.MY_MAIL;
  const subject = "Contact Form LearnUp";
  const text = `Name: ${name} \nEmail: ${email} \nMessage: ${message}`;
  console.log("to");
  await sendEmail(process.env.MY_MAIL, subject, text);
  console.log(to);
  res.status(200).json({
    success: true,
    message: "Email sent successfully",
  });
});
export const courseRequest = catchAsyncError(async (req, res, next) => {
  const { name, email, course } = req.body;
  const to = process.env.MY_MAIL;
  //   const to = "pranjal.choudhary2020@vitstudent.ac.in";
  const subject = "Request for a course on LearnUp";
  const text = `Name: ${name} \n Email: ${email} \n Course: ${course}`;

  await sendEmail(to, subject, text);
  console.log(to);
  res.status(200).json({
    success: true,
    message: "Your Course Request has been sent successfully",
  });
});
export const getDashboardStats = catchAsyncError(async (req, res, next) => {
  const stats = await Stats.find({}).sort({ createdAt: "desc" }).limit(12);
  res.status(200).json({
    success: true,
  });
});
