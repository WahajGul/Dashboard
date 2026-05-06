import { pool } from "../../config/db.js";

// STUDENTS
export const getAllEmployees = async (req, res) => {
    try {
        const result = await pool.query("SELECT * FROM EMPLOYEES");

        res.status(201).json(result.rows);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Server error" });
    }
};

export const getEmployeeCount = async (req, res) => {
    try {
        const result = await pool.query("SELECT count(*) FROM EMPLOYEES");

        res.status(201).json(result.rows);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Server error" });
    }
};
