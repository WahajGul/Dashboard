import { pool } from "../../config/db.js";

// Students
export const getStudentDetails = async (req, res) => {
  try {
    const result = await pool.query(
      "SELECT * FROM student_details"
    );

    res.status(200).json(result.rows);

  } catch (error) {
    console.error(error.message);

    res.status(500).json({
      error: "Server Error",
    });
  }
};

// Employees
export const getEmployeesDetails = async (req, res) => {
  try {
    const result = await pool.query(
      "SELECT * FROM employees_details_view"
    );

    res.status(200).json(result.rows);

  } catch (error) {
    console.error(error.message);

    res.status(500).json({
      error: "Server Error",
    });
  }
};

// Enrollments
export const getTotalEnrollments = async (req, res) => {
  try {
    const result = await pool.query(
      "SELECT COUNT(*) FROM enrollments"
    );

    res.status(200).json(result.rows);

  } catch (error) {
    console.error(error.message);

    res.status(500).json({
      error: "Server Error",
    });
  }
};

// Fees
export const getFeeDetails = async (req, res) => {
  try {
    const result = await pool.query(
      "SELECT * FROM fee_details"
    );

    res.status(200).json(result.rows);

  } catch (error) {
    console.error(error.message);

    res.status(500).json({
      error: "Server Error",
    });
  }
};

// Revenue
export const getLastYearRevenue = async (req, res) => {
  try {
    const result = await pool.query(
      "SELECT * FROM monthly_revenue_last_year"
    );

    res.status(200).json(result.rows);

  } catch (error) {
    console.error(error.message);

    res.status(500).json({
      error: "Server Error",
    });
  }
};

// Admissions
export const getAdmissionPerMonth = async (req, res) => {
  try {
    const result = await pool.query(
      "SELECT * FROM student_admission_per_month"
    );

    res.status(200).json(result.rows);

  } catch (error) {
    console.error(error.message);

    res.status(500).json({
      error: "Server Error",
    });
  }
};