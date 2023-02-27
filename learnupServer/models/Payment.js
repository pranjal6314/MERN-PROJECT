import mongoose from "mongoose";
const schema = new mongoose.Schema({
  razorpay_subscription_id: {
    type: String,
    require: true,
  },
  razorpay_payment_id: {
    type: String,
    require: true,
  },
  razorpay_signature: {
    type: String,
    require: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export const Payment = mongoose.model("Payment", schema);
