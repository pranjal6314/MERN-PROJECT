import express from "express";
import { config } from "dotenv";
config({
  path: "./config/config.env",
});
const app = express();
export default app;
