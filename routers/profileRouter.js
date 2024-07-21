import express from "express";
import { addUserItem, getUser } from "../controllers/profileController.js";

const profileRouter = express.Router();
profileRouter.post("/add", addUserItem);
profileRouter.get("/getUser", getUser);

export default profileRouter;
