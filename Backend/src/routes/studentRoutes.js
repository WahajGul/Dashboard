import express from "express";
import {
    getAllStudents,
    getStudentCount,
} from "../controllers/studentController.js";

const router = express.Router();

router.get("/", getAllStudents);
router.get("/total", getStudentCount);

export { router };
