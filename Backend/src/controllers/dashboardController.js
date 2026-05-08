import {pool} from "../../config/db.js";
// ToTal Students 

export const get_student_details = async (req , res ) =>{
  
    try{
        const result = await pool.query("SELECT * FROM student_details");

        res.status(201).json(result.rows)
    } catch (error) {
        console.error(error);
        res.staus(500).json({error:"Server Error"})
    } 

}
//  Total Employees 

export const get_employees_details = async (req , res) =>{
    try {
        const result = await pool.query("select * from employees_details_view")
        res.status(201).json(result.rows)

    }catch (error){
        console.error(error)
        res.status(500).json({error:"Server Error "})
    }
}

//  Total Enrollments

export const get_total_enrollments = async (req , res) =>{
    try {
        const result = await pool.query("SELECT COUNT(*) FROM enrollments ")
        res.status(201).json(result.rows)

    }catch (error){
        console.error(error)
        res.status(500).json({error:"Server Error "})
    }
}

//  Total Fees

export const get_fee_details = async (req , res) =>{
    try {
        const result = await pool.query("select * from fee_details")
        res.status(201).json(result.rows)

    }catch (error){
        console.error(error)
        res.status(500).json({error:"Server Error "})
    }
}

//  Last Year Revenue
export const get_last_year_revenue = async (req , res) =>{
    try {
        const result = await pool.query("SELECT * from monthly_revenue_last_year")
        res.status(201).json(result.rows)
    }catch (error){
        console.error(error)
        res.status(500).json({error:"Server Error "})
    }
}