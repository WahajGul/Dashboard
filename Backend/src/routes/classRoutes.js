import express from "express";
import {
    getAllClasses,
    getClassCount,
} from "../controllers/classController.js";

const router = express.Router();

router.get("/", getAllClasses);
router.get("/total", getClassCount);

export { router };
