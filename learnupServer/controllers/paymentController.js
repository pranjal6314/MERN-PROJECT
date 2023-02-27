import catchAsyncError from "../middlewares/catchAsyncError.js";
import { User } from "../models/User.js";
import { instance } from "../server.js";
import crypto from "crypto";
import { Payment } from "../models/Payment.js";
export const buySubscription = catchAsyncError(async (req, res, next) => {
  const user = await User.findById(req.user.id);
  if (user.role === "admin")
    return next(new ErrorHandler("Admin cannot buy subscription", 400));
  const plan_id = process.env.PLAN_ID || "plan_G5Z7Z2Q2Z2Q2Z2";
  const subscription = await instance.subscriptions.create({
    plan_id: plan_id,
    customer_notify: 1,
    total_count: 12,
  });
  user.subscription.id = subscription.id;
  user.subscription.status = subscription.status;
  await user.save();
  res.status(201).json({
    success: true,
    subscription,
  });
});
export const verifyPayment = catchAsyncError(async (req, res, next) => {
  const { razorpay_subscription_id, razorpay_payment_id, razorpay_signature } =
    req.body;

  const user = await User.findById(req.user.id);
  const subscription_id = user.subscription.id;
  const gernrated_signature = crypto
    .createHash("sha256", process.env.RAZORPAY_KEY_SECRET)
    .update(razorpay_payment_id + "|" + subscription_id, "utf-8")
    .digest("hex");
  const isAuthentic = razorpay_signature === gernrated_signature;
  if (!isAuthentic) {
    return res.redirect(`${process.env.FRONTEND_URL}/paymentfail`);
  }
  //database come here
  await Payment.create({
    razorpay_subscription_id,
    razorpay_payment_id,
    razorpay_signature,
  });
  user.subscription.status = "active";
  await user.save();
  res.redirect(
    `${process.env.FRONTEND_URL}/paymentsuccess?refrence=${razorpay_payment_id}`
  );
});

export const getRazorPayKey = catchAsyncError(async (req, res, next) => {
  res.status(200).json({
    success: true,
    key: process.env.RAZORPAY_KEY_ID,
  });
});
