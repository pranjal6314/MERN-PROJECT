import mongoose from "mongoose";
import validator from "validator";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
const schema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide a name"],
  },
  email: {
    type: String,
    required: [true, "Please provide an email"],
    unique: true,
    validate: validator.isEmail,
  },
  password: {
    type: String,
    required: [true, "Please provide a password"],
    minLength: [8, "Password must be at least 8 characters"],
    select: false,
  },
  role: {
    type: String,
    enum: ["user", "admin"],
    default: "user",
  },
  subscription: {
    id: String,
    status: String,
  },
  avatar: {
    public_id: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  },
  playlist: [
    {
      course: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Course",
      },
      poster: String,
    },
  ],
  // CreatedAt type, default
  createdAt: {
    type: Date,
    default: Date.now,
  },
  ResetPasswordToken: String,
  ResetPasswordExpire: String,
});
// schema.pre("save", async function (next) {
//   if (!this.isModified("password")) return next();
//   const hashPassword = await bcrypt.hash(this.password, 10);
//   this.password = hashPassword;
//   next();
// });
schema.methods.getJwtToken = function () {
  return jwt.sign({ _id: this._id }, process.env.JWT_SECRET, {
    expiresIn: "15d",
  });
};
// schema.methods.comparePassword = async function (password) {
//   return await bcrypt.compare(password, this.password);
// };
schema.methods.comparePassword = async function (password) {
  console.log(password + " " + this.password);
  // const isMatch = await password.localeCompare(this.password);
  const isMatch = password === this.password;
  console.log("isMatch", isMatch);
  return isMatch;
};

export const User = mongoose.model("User", schema);
