import express from "express";
import cors from "cors";
import { router as studentRoutes } from "./src/routes/studentRoutes.js";
import dotenv from "dotenv";
const app = express();
dotenv.config();

app.use(cors());
app.use(express.json());

app.use("/students", studentRoutes);
app.listen(5000, () => {
    console.log("Server running on PORT ", process.env.PORT, "...");
});
