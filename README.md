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

## 🔐 Environment Variables

Create a `.env` file in the root directory and add:

PORT=5000
DB_HOST=your_host
DB_USER=your_user
DB_PASSWORD=your_password
DB_NAME=your_database
JWT_SECRET=your_secret_key
FRONTEND_URL=your_frontend_url

## ▶️ How to Run Locally

1. Clone the repository
-- git clone https://github.com/Omkarphalle378/expense-tracker-backend.git


2. Navigate into project folder
-- cd expense-tracker-backend


3. Install dependencies
-- npm install


4. Start the server
-- npm run dev

Server will run at: http://localhost:5000


---

## 📌 API Endpoints

### 🔑 Authentication Routes

- POST `/api/auth/register`
- POST `/api/auth/login`

### 💰 Expense Routes (Protected)

- GET `/api/expenses`
- POST `/api/expenses`
- PUT `/api/expenses/:id`
- DELETE `/api/expenses/:id`

---

## 🛡 Security Features

- JWT-based authentication
- Password hashing with bcrypt
- Rate limiting to prevent brute force attacks
- Helmet for securing HTTP headers
- Input validation to prevent invalid data
- Parameterized queries to prevent SQL injection
- Centralized error handling

---

## 📈 Future Improvements

- Pagination for large datasets
- Filtering & sorting expenses
- Refresh token authentication
- Deployment to cloud (Render/Railway)
- API documentation using Swagger

---

## 👨‍💻 Author

Omkar Phalle  
Computer Science Student | Backend Developer
