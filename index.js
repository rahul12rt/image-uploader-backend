import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import profileRouter from "./routers/profileRouter.js";

//app config
const app = express();
const port = 8000;

//middleware
app.use(express.json());
app.use(cors());

//database connect
connectDB();
app.use("/api/profile", profileRouter);

app.get("/", (req, res) => {
  res.send("API wokrking");
});

app.listen(port, () => {
  console.log(`server running on http://localhost:${port}`);
});
