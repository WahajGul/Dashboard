import { pool } from "../../config/db.js";

// STUDENTS
export const getAllClasses = async (req, res) => {
    try {
        const result = await pool.query("SELECT * FROM CLASSES");

        res.status(201).json(result.rows);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Server error" });
    }
};

export const getClassCount = async (req, res) => {
    try {
        const result = await pool.query("SELECT count(*) FROM CLASSES");

        res.status(201).json(result.rows);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Server error" });
    }
};
