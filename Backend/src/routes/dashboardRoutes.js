import express from "express"
import {
     get_total_students ,
     get_total_employees,
     get_total_enrollments , 
     get_fee_details } from "../controllers/dashboardController"

const router = express.Router()

router.get("/total_students",get_total_students)
router.get("/total_employees",get_total_employees)
router.get("/total_enrollments",get_total_enrollments)
router.get("/fee_details",get_fee_details)

export {router}; 