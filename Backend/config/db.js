import { Pool } from "pg";
import dotenv from "dotenv";
dotenv.config();

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false,
    },
});

// test connection
pool.connect()
    .then(() => console.log("✅ DB Connected"))
    .catch((err) => console.error("❌ DB Connection Error", err));

export { pool };
