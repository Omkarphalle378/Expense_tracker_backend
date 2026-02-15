const {body , validationResult} = require("express-validator")

const validateRegister = [
  body("name")
    .notEmpty()
    .withMessage("Name is required"),

  body("email")
    .isEmail()
    .withMessage("Valid email is required"),

  body("password")
    .isLength({min:6})
    .withMessage("Password must be at leaste 6 characters long")
];

const validateLogin = [
  body("email")
    .isEmail()
    .withMessage("Valid email is required"),

  body("password")
    .notEmpty()
    .withMessage("Password is required")
]

const validateExpense = [
  body("amount")
    .isFloat({gt:0})
    .withMessage("Amount Must be number or greater than 0"),

  body("category")
    .notEmpty()
    .withMessage("Category is required"),

  body("expense_date")
    .isISO8601()
    .withMessage("Valid date is required")
]

const validate = (req,res,next)=>{
  const errors = validationResult(req)
  if(!errors.isEmpty()){
    return res.status(400).json({
      success:false,
      errors:errors.array()
    })
  }
  next();
};

module.exports = { validateRegister, validateLogin,validateExpense,validate };
