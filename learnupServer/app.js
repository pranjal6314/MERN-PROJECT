import express from "express";
import { config } from "dotenv";
import course from "./routes/courseRoutes.js";
import user from "./routes/userRoutes.js";
import ErrorMiddleware from "./middlewares/Error.js";
config({
  path: "./config/config.env",
});
const app = express();

//using middleware
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
//import routes

app.use("/api/v1", course);
app.use("/api/v1", user);
export default app;

app.use(ErrorMiddleware);
