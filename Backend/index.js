import express from "express";
import cors from "cors";
import { router as studentRoutes } from "./src/routes/studentRoutes.js";
import { router as employeeRoutes } from "./src/routes/employeeRoutes.js";
import { router as classRoutes } from "./src/routes/classRoutes.js";
import { get_total_students } from "./src/controllers/dashboardController.js";
import dotenv from "dotenv";
const app = express();
dotenv.config();

app.use(cors());
app.use(express.json());

app.use("/students", studentRoutes);
app.use("/employees", employeeRoutes);
app.use("/classes", classRoutes);
app.use("/total_students", get_total_students);

app.listen(5000, () => {
    console.log("Server running on PORT ", process.env.PORT, "...");
});
