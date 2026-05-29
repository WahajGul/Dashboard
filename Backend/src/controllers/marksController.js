import { pool } from "../../config/db.js";

// routes/marks.js
const getHighestMarksByCourse = async (req, res) => {
    try {
        const query = `SELECT * FROM highest_marks_by_course`;
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
export { getHighestMarksByCourse };
