import express from "express";
import {
    getAllEmployees,
    getEmployeeCount,
} from "../controllers/employeeController.js";

const router = express.Router();

router.get("/", getAllEmployees);
router.get("/total", getEmployeeCount);

export { router };
