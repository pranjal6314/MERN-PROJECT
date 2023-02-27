import express from "express";
import { buySubscription } from "../controllers/paymentController.js";
import { isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

//Buy Subscription
router.route("/subscribe").get(isAuthenticated, buySubscription);

export default router;
