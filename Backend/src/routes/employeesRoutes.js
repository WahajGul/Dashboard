import express from "express";
import { getEmpRows } from "../controllers/employeesController.js";

const router = express.Router();
router.get("/employee-row", getEmpRows);

export default router;
