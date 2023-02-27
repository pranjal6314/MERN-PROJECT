import catchAsyncError from "../middlewares/catchAsyncError.js";
import { User } from "../models/User.js";
import { instance } from "../server.js";
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
