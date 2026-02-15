const jwt = require("jsonwebtoken")
const bcrypt = require("bcryptjs")
const db = require("../config/db")


//RegisterUserAPI----------------------------------------------------------------
const registerUser = async (req, res , next) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ message: "All Fields are required" });
    }

    const hashedpassword = await bcrypt.hash(password, 10);
    const sql = "INSERT INTO users (name, email, password) VALUES (?, ?, ?)";
    await db.query(sql, [name, email, hashedpassword])
    return res.status(200).json({ success: true, message: "User registered Successfully" })
  }
  catch(error){
  if(error.code === "ER_DUP_ENTRY"){
    error.statusCode = 400;
    error.message = "Email already exists";
  }
  next(error);
}
};

//LoginUser API----------------------------------------------------------------

const loginUser = async (req,res,next)=>{
  try{
    const {email,password} = req.body;
    const sql = `SELECT * FROM users WHERE email = ?`;
    const [rows] = await db.query(sql,[email]);

    if(rows.length === 0){
      return res.status(400).json({
        success:false,
        message:"User not found"
      })
    }

    const user = rows[0]
    const isMatch = await bcrypt.compare(password,user.password)
    if(!isMatch){
      return res.status(401).json({
        success:false,
        message:"Invalid Password"
      })
    }

    const token = jwt.sign(
      {id:user.id , email : user.email},
      process.env.JWT_SECRET,
      {expiresIn:"1h"}
    )

    return res.status(200).json({
      success:true,
      message:"Login Successful",
      token
    })
  }
  catch(error){
    next(error)
  }
};

  module.exports = { registerUser, loginUser };