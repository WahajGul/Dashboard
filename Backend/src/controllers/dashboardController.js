import {pool} from "../../config/db.js";
// ToTal Students 

export const get_total_students = async (req , res ) =>{
  
    try{
        const result = await pool.query("SELECT COUNT(*) FROM students");

        res.status(201).json(result.rows)
    } catch (error) {
        console.error(error);
        res.staus(500).json({error:"Server Error"})
    } 

}
//  Total Employees 

export const get_total_employees = async (req , res) =>{
    try {
        const result = await pool.query("SELECT COUNT(*) FROM employees ")
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