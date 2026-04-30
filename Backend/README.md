# 🚀 Backend Setup (Node.js + Express + Neon DB using pg Pool)

## 📌 Overview

This project is a simple backend built with Node.js and Express, connected to a Neon PostgreSQL database using the pg Pool (no ORM).

---

## 🛠️ Tech Stack

* Node.js
* Express.js
* PostgreSQL (Neon)
* pg (Pool)
* dotenv

---

## 📁 Project Structure

```
backend/
│── config/
│   └── db.js
│
│── src/
│   │── controllers/
│   │   └── userController.js
│   │
│   │── routes/
│   │   └── userRoutes.js
│
│── index.js
│── .env
│── package.json
│── README.md
```

---

## ⚙️ Setup Instructions

### 1. Initialize Project

```
npm init -y
```

---

### 2. Install Dependencies

```
npm install express cors dotenv pg
```

---

### 3. Configure Environment Variables

Create a `.env` file in root folder:

```
DATABASE_URL=your_neon_connection_string
PORT=5000
```

👉 Get connection string from Neon dashboard

---

### 4. Database Setup

Run this SQL in Neon:

```
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100),
  email VARCHAR(100) UNIQUE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

---

### 5. Database Connection (config/db.js)

```
const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

module.exports = pool;
```

---

### 6. Run Server

```
node index.js
```

Server will run on:

```
http://localhost:5000
```

---

## 🔌 API Endpoints

### ✅ Get All Users

* Method: GET
* URL:

```
http://localhost:5000/api/users
```

---

### ✅ Create User

* Method: POST
* URL:

```
http://localhost:5000/api/users
```

* Body (JSON):

```
{
  "name": "Ali",
  "email": "ali@gmail.com"
}
```

---

## 🧪 Testing

### Browser (GET only)

```
http://localhost:5000/api/users
```

---

### For POST Requests

Use:

* Postman
* Thunder Client
* Fetch API

---

## ⚠️ Important Notes

* Use parameterized queries ($1, $2) to prevent SQL injection
* Do not share `.env` file
* Neon requires SSL connection
* Email must be unique

---

## ✅ Success Indicators

* Server starts without error
* Database connects successfully
* API returns data
* Data is stored in Neon database

---

## 👨‍💻 Author

Muhammad Talha 