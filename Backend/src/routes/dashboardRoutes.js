import express from "express";

import {
  getStudentDetails,
  getEmployeesDetails,
  getTotalEnrollments,
  getFeeDetails,
  getLastYearRevenue,
  getAdmissionPerMonth,
} from "../controllers/dashboardController.js";

const router = express.Router();

router.get("/students", getStudentDetails);

router.get("/employees", getEmployeesDetails);

router.get("/enrollments", getTotalEnrollments);

router.get("/fees", getFeeDetails);

router.get("/revenue_last-year", getLastYearRevenue);

router.get("/admissions_monthly", getAdmissionPerMonth);

export default router;