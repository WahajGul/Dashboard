import { pool } from "../../config/db.js";

// CREATE USER
export const getAllStudents = async (req, res) => {
    try {
        const result = await pool.query("SELECT * FROM STUDENTS");

        res.status(201).json(result.rows);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Server error" });
    }
};
