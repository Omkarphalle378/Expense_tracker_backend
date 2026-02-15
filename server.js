require("dotenv").config();
const express = require("express")
const cors = require("cors")
const helmet = require("helmet")
const db = require("./config/db")
const authRoutes = require("./routes/authRoutes")
const expenseRoutes = require("./routes/expenseRoutes")
const rateLimit = require("express-rate-limit")
const errorHandler = require("./middleware/errorMiddleware")

const app = express()
app.use(cors({
  origin: process.env.FRONTEND_URL,
  credentials: true
}));

app.use(express.json())
app.use(helmet())

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: "Too many requests, please try again later."
});
app.use("/api/auth",limiter,authRoutes)
app.use("/api/expenses",expenseRoutes)
app.use(errorHandler)

app.get("/", (req, res) => {
  res.send("Backend is running")
})

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`server running on port ${port} `)
})



