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

  const statsData = [];

  for (let index = 0; index < stats.length; index++) {
    statsData.unshift(stats[index]);
  }
  const requiredSize = 12 - stats.length;
  for (let i = 0; i < requiredSize; i++) {
    statsData.unshift({ users: 0, subscriptions: 0, views: 0 });
  }
  const userCount = statsData[11].users;
  const subscriptionsCount = statsData[11].subscriptions;
  const viewsCount = statsData[11].views;
  let userProfit = true,
    subscriptionProfit = true,
    viewProfit = true;
  let userPercentage = 0,
    subscriptionPercentage = 0,
    viewPercentage = 0;
  if (statsData[10].users === 0) userPercentage = userCount * 100;
  if (statsData[10].views === 0) viewPercentage = viewsCount * 100;
  if (statsData[10].subscriptions === 0)
    subscriptionPercentage = subscriptionsCount * 100;
  else {
    const diffrence = {
      user: statsData[11].users - statsData[10].users,
      subscriptions: statsData[11].subscriptions - statsData[10].subscriptions,
      views: statsData[11].views - statsData[10].views,
    };
    userPercentage = (diffrence.user / statsData[10].users) * 100;
    subscriptionPercentage =
      (diffrence.subscriptions / statsData[10].subscriptions) * 100;
    viewPercentage = (diffrence.views / statsData[10].views) * 100;
    if (userPercentage < 0) userProfit = false;
    if (subscriptionPercentage < 0) subscriptionProfit = false;
    if (viewPercentage < 0) viewProfit = false;
  }
  res.status(200).json({
    success: true,
    stats: statsData,
    userCount,
    subscriptionsCount,
    viewsCount,
    userPercentage,
    subscriptionPercentage,
    viewPercentage,
    userProfit,
    subscriptionProfit,
    viewProfit,
  });
});
