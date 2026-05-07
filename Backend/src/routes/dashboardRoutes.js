import express from "express"
import { get_total_students } from "../controllers/dashboardController"

const router = express.Router()

router.get("/total_students",get_total_students)

export {router}; 