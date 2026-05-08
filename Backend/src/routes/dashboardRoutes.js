import express from "express"
import {
     get_student_details ,
     get_employees_details,
     get_total_enrollments , 
     get_fee_details } from "../controllers/dashboardController"

const router = express.Router()

router.get("/get_student_details",get_student_details)
router.get("/employees_details",get_employees_details)
router.get("/total_enrollments",get_total_enrollments)
router.get("/fee_details",get_fee_details)

export {router}; 