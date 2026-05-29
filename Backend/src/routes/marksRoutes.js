import express from "express";
import { getHighestMarksByCourse } from "../controllers/marksController.js";

const router = express.Router();
router.get("/highest-by-course", getHighestMarksByCourse);

export default router;
