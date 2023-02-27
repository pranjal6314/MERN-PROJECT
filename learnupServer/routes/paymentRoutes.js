import express from "express";
import {
  buySubscription,
  verifyPayment,
} from "../controllers/paymentController.js";
import { isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

//Buy Subscription
router.route("/subscribe").get(isAuthenticated, buySubscription);
//payment verification
router.route("payment/verify").post(isAuthenticated, verifyPayment);

export default router;
