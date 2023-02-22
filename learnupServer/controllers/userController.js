import catchAsyncError from "../middlewares/catchAsyncError.js";
import ErrorHandler from "../utils/errorHandler.js";
import { User } from "../models/User.js";
import { sendToken } from "../utils/sendToken.js";
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
