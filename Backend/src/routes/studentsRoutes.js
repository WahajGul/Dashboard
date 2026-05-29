import express from "express";
import { getStudentByAgeGroup } from "../controllers/studentsController.js";
const router = express.Router();

router.get("/students-by-age-group", getStudentByAgeGroup);

export default router;
