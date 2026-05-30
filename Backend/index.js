import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import dashboardRoutes from "./src/routes/dashboardRoutes.js";
import marksRoutes from "./src/routes/marksRoutes.js";
import studentRoutes from "./src/routes/studentsRoutes.js";
import employeeRoutes from "./src/routes/employeesRoutes.js";

dotenv.config();

const app = express();

app.use(cors());

app.use(express.json());

// Routes
app.use("/api/dashboard", dashboardRoutes);
app.use("/api/marks", marksRoutes);
app.use("/api/students", studentRoutes);
app.use("/api/employees", employeeRoutes);
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on PORT ${PORT}`);
});
