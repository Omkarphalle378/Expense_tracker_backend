const db = require("../config/db")

//ADDEXPENCES----------------------------------------------------------------
const addExpense = async (req, res , next) => {
  try {
    const { amount, category, description, expense_date } = req.body;
    if (!amount || !category || !expense_date) {
      return res.status(400).json({
        success: false,
        message: "Required Fields are missing"
      })
    }
    const sql = `INSERT INTO expenses (user_id,amount,category,description,expense_date) VALUES (?,?,?,?,?)`
    await db.query(sql, [req.user.id, amount, category, description, expense_date])
    return res.status(201).json({
      success: true,
      message: "Expense Added Successfully"
    })
  }

  catch (error) {
   next(error)
  }
};


//GETEXPENCES--------------------------------------------------------------------------------
const getExpense = async (req, res , next) => {
  try {
    const sql = `SELECT * FROM expenses WHERE user_id = ?`;
    const [rows] = await db.query(sql, [req.user.id])
    return res.status(200).json({
      success: true,
      data: rows
    })
  }
  catch (error) {
    next(error)
  }
};


//deleteExpense--------------------------------------------------------------------------------------
const deleteExpense = async (req, res , next) => {
  try {
    const expenseId = req.params.id;
    const sql = `DELETE FROM expenses WHERE id = ? AND user_id = ? `
    const [result] = await db.query(sql, [expenseId, req.user.id])
    if (result.affectedRows === 0) {
      return res.status(404).json({
        success: false,
        message: "Expense Not Found"
      })
    }
    return res.status(200).json({
      success: true,
      message: "Expense Deleted Successfully"
    })
  }
  catch (error) {
    next(error)
  }
};

//updateExpense------------------------------------------------------------------------------------------
const updateExpense = async (req, res , next) => {
  try {
    const expenseId = req.params.id;
    const { amount, category, description, expense_date } = req.body;
    if (!amount || !category || !expense_date) {
      return res.status(400).json({
        success: false,
        message: "Required fields missing"
      })
    }
    const sql = `UPDATE expenses SET amount = ? , category = ?, description = ?,expense_date = ? WHERE id = ? AND user_id = ?`;
    const [result] = await db.query(sql, [amount, category, description, expense_date, expenseId, req.user.id])
    if (result.affectedRows === 0) {
      return res.status(404).json({
        success: false,
        message: "Expense not found"
      })
    }

    return res.status(200).json({
      success: true,
      message: "Expense Updated Successfully"
    })
  }
  catch (error) {
    next(error)
  }
};


const getTotalExpenses = async (req, res,next) => {
  try {
    const sql = `
      SELECT SUM(amount) AS totalExpenses
      FROM expenses
      WHERE user_id = ?
    `;

    const [rows] = await db.query(sql, [req.user.id]);

    return res.status(200).json({
      success: true,
      total: rows[0].totalExpenses || 0
    });
  } 
  catch (error) {
    next(error)
  }
};


module.exports = { addExpense, getExpense, deleteExpense, updateExpense, getTotalExpenses };