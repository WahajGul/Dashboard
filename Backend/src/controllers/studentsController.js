import { pool } from "../../config/db.js";

// shows total student belonging to different age groups
const getStudentByAgeGroup = async (req, res) => {
    try {
        const query = `SELECT * FROM  view_age_group_of_students`;
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

const getStudentRows = async (req, res) => {
    try {
        const query = `SELECT * FROM  vw_student_marks_details ORDER BY student_name , exam_date LIMIT 10`;
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

export { getStudentByAgeGroup, getStudentRows };
