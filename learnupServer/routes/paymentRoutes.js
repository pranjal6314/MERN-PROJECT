import express from "express";
import {
  buySubscription,
  cancelSubscription,
  getRazorPayKey,
  verifyPayment,
} from "../controllers/paymentController.js";
import { isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

//Buy Subscription
router.route("/subscribe").get(isAuthenticated, buySubscription);
//payment verification
router.route("payment/verify").post(isAuthenticated, verifyPayment);
//get razorpay key
router.route("/getkey").get(getRazorPayKey);
//cancel subscription
router.route("/subscribe/cancel").delete(isAuthenticated, cancelSubscription);
export default router;
