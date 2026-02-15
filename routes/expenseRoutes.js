const express = require("express")
const verifyToken = require("../middleware/authMiddleware")
const { validateExpense, validate } = require("../middleware/validationMiddleware");
const {addExpense,getExpense , deleteExpense ,updateExpense, getTotalExpenses} = require("../controllers/expenseControllers")
const router = express.Router()

router.post("/add", verifyToken,validateExpense,validate,addExpense)
router.get("/get", verifyToken,getExpense)
router.delete("/:id",verifyToken,deleteExpense)
router.put("/:id",verifyToken,updateExpense)
router.get("/total",verifyToken,getTotalExpenses)
module.exports = router;