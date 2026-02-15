# Expense Tracker Backend

A secure and production-ready REST API for Expense Tracker built using Node.js, Express, and MySQL.

---

## 🚀 Features

- User Registration & Login
- JWT Authentication
- Password Hashing using bcrypt
- Protected Routes
- CRUD Operations for Expenses
- Input Validation using express-validator
- Global Error Handling
- Rate Limiting (Brute Force Protection)
- Helmet Security Middleware
- SQL Injection Protection (Parameterized Queries)

---

## 🛠 Tech Stack

- Node.js
- Express.js
- MySQL
- JWT (jsonwebtoken)
- bcryptjs
- express-validator
- Helmet
- express-rate-limit

---

## 📂 Project Structure
backend/
│
├── config/
│ └── db.js
│
├── controllers/
│ ├── authController.js
│ └── expenseController.js
│
├── middleware/
│ ├── authMiddleware.js
│ ├── validationMiddleware.js
│ └── errorMiddleware.js
│
├── routes/
│ ├── authRoutes.js
│ └── expenseRoutes.js
│
├── .gitignore
├── package.json
├── server.js
└── README.md

