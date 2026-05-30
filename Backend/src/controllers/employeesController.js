import { pool } from "../../config/db.js";

// routes/marks.js
const getEmpRows = async (req, res) => {
    try {
        const query = `SELECT * FROM vw_employees_basic LIMIT 10`;
        const result = await pool.query(query);

        res.json({
            success: true,
            data: result.rows,
        });
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({
            success: false,
            message: "Error fetching data",
        });
    }
};
export { getEmpRows };
