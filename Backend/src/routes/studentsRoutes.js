import express from "express";
import {
    getStudentByAgeGroup,
    getStudentRows,
} from "../controllers/studentsController.js";
const router = express.Router();

router.get("/students-by-age-group", getStudentByAgeGroup);
router.get("/student-rows", getStudentRows);

export default router;
