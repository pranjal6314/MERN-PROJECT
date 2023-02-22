import catchAsyncError from "../middlewares/catchAsyncError.js";
import ErrorHandler from "../utils/errorHandler.js";
import { User } from "../models/User.js";
import { sendToken } from "../utils/sendToken.js";
import { sendEmail } from "../utils/sendEmail.js";
import crypto from "crypto";

//signup
export const register = catchAsyncError(async (req, res, next) => {
  const { name, email, password } = req.body;
  // const file=req.file
  if (!name || !email || !password) {
    return next(new ErrorHandler("Please enter all fields", 400));
  }
  let user = await User.findOne({ email });
  if (user) {
    return next(new ErrorHandler("User already exists", 409));
  }
  user = await User.create({
    name,
    email,
    password,
    avatar: {
      public_id: "temp",
      url: "temp",
    },
  });
  sendToken(res, user, "Registration Successful", 201);
});

//LOGIN USER
export const login = catchAsyncError(async (req, res, next) => {
  const { email, password } = req.body;
  // const file=req.file
  if (!email || !password) {
    return next(new ErrorHandler("Please enter all fields", 400));
  }
  const user = await User.findOne({ email }).select("+password");
  if (!user) {
    return next(new ErrorHandler("Incorrect Email and Password", 401));
  }
  const isMatch = await user.comparePassword(password);
  if (!isMatch) {
    return next(new ErrorHandler("Incorrect Credentials", 401));
  }
  sendToken(res, user, `Welcome Back ${user.name}`, 200);
});

//LOGOUT USER
export const logout = catchAsyncError(async (req, res, next) => {
  res
    .status(200)
    .cookie("token", null, {
      expires: new Date(Date.now()),
    })
    .json({
      success: true,
      message: "Logged out successfully",
    });
});

//Get My Profile
export const getMyProfile = catchAsyncError(async (req, res, next) => {
  const user = await User.findById(req.user._id);

  res.status(200).json({
    success: true,
    user,
  });
});
//change password
export const changePassword = catchAsyncError(async (req, res, next) => {
  const { oldPassword, newPassword } = req.body;
  if (!oldPassword || !newPassword)
    return next(new ErrorHandler("Please enter all fields", 400));
  const user = await User.findById(req.user._id).select("+password");
  const isMatch = await user.comparePassword(oldPassword);
  if (!isMatch) {
    return next(new ErrorHandler("Incorrect Old Password", 400));
  }
  user.password = newPassword;
  await user.save();
  res.status(200).json({
    success: true,
    message: "Password changed successfully",
  });
});
//update profile
export const updateProfile = catchAsyncError(async (req, res, next) => {
  const { name, email } = req.body;
  const user = await User.findById(req.user._id).select("+password");
  if (name) user.name = name;
  if (email) user.email = email;

  await user.save();
  res.status(200).json({
    success: true,
    message: "Profile Updated Successfully",
  });
});

export const updateProfilePicture = catchAsyncError(async (req, res, next) => {
  res.status(200).json({
    success: true,
    message: "Profile Photo Updated Successfully",
  });
});
//forget password
export const forgetPassword = catchAsyncError(async (req, res, next) => {
  const { email } = req.body;
  const user = await User.findOne({ email });
  if (!user) return next(new ErrorHandler("User not found", 404));
  const resetToken = await user.getResetToken();
  //send this token to user email
  await user.save();
  const url = `${process.env.FRONTEND_URL}/api/v1/resetpassword/${resetToken}`;
  const message = `Click on the link to reset your password : ${url}. If you have not requested this email, then ignore it.`;
  await sendEmail(user.email, "learnUP Password Reset", message);
  res.status(200).json({
    success: true,
    message: `Reset Password Link Sent to your Email ${user.email}`,
  });
});
//reset password
export const resetPassword = catchAsyncError(async (req, res, next) => {
  const { token } = req.params; //here params is used because we are sending token in url

  const resetPasswordToken = crypto
    .createHash("sha256")
    .update(token)
    .digest("hex");
  const user = await User.findOne({
    resetPasswordToken,
    resetPasswordExpire: { $gt: Date.now() },
  });
  if (!user)
    return next(
      new ErrorHandler("Password reset token is invalid or has expired", 400)
    );
  user.password = req.body.password;
  user.resetPasswordExpire = undefined;
  user.resetPasswordToken = undefined;
  await user.save();
  res.status(200).json({
    success: true,
    message: "Password Reset Successfully",
  });
});
