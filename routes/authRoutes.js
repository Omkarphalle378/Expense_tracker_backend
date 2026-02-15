const express = require("express")
const {registerUser,loginUser} = require("../controllers/authController");
const router = express.Router()
const { validateRegister,validateLogin,validate } = require("../middleware/validationMiddleware");


router.post("/register",validateRegister,validate,registerUser) 
router.post("/login", validateLogin,validate,loginUser)

module.exports = router