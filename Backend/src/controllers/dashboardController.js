import {pool} from "../../config/db.js";
// ToTal Students 

export const get_total_students = async (req , res ) =>{
  
    try{
        const result = await pool.query("SELECT COUNT(*) FROM students");

        res.status(201).json(result.rows[0])
    } catch (error) {
        console.error(error);
        res.staus(500).json({error:"Server Error"})
    } 

}