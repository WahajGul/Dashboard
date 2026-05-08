import express from "express";
import cors from "cors";

import { get_student_details } from "./src/controllers/dashboardController.js";
import { get_employees_details } from "./src/controllers/dashboardController.js";
import { get_total_enrollments } from "./src/controllers/dashboardController.js";
import { get_fee_details } from "./src/controllers/dashboardController.js";
import { get_last_year_revenue } from "./src/controllers/dashboardController.js";
import dotenv from "dotenv";
const app = express();
dotenv.config();

app.use(cors());
app.use(express.json());


app.use("/student_details", get_student_details);
app.use("/employees_details",get_employees_details)
app.use("/total_enrollments",get_total_enrollments)
app.use("/fee_details",get_fee_details)
app.use("/last_year_revenue",get_last_year_revenue)
    
app.listen(5000, () => {
    console.log("Server running on PORT ", process.env.PORT, "...");
});
