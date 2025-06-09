import { User } from "../models/user.model.js";
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

export const register = async (req, res) => {
  try {
    const { fullname, email, phoneNumber, password, role } = req.body;
    if (!fullname || !email || !phoneNumber || !password || !role) {
      return res
        .status(400)
        .json({ message: "All fields are required", success: false });
    }
    // Check if user already exists
    const existingUser = await User.findOne({ email: email });
    if (existingUser) {
      return res
        .status(400)
        .json({ message: "User already exists", success: false });
    }
    const hashedPassword = await bcrypt.hash(password, 10);

    await User.create({
      fullname,
      email,
      phoneNumber,
      password: hashedPassword,
      role,
    });

    return res.status(201).json({
      message: "User registered successfully",
      success: true,
    });
  } catch (error) {
    console.error("Error during registration:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password, role } = req.body;
    if (!email || !password || !role) {
      return res
        .status(400)
        .json({ message: "All fields are required", success: false });
    }
    let user = User.findOne({ email: email });
    if (!user) {
      return res
        .status(400)
        .json({ message: "Invalid credentials (email)", success: false });
    }
    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
      return res
        .status(400)
        .json({ message: "Invalid credentials (password)", success: false });
    }

    if (role != user.role) {
      return res
        .status(400)
        .json({ message: "Invalid credentials (role)", success: false });
    }

    const tokenData = {
      userId: user._id,
    };
    const token = await jwt.sign(tokenData, process.env.SECRET_KEY, {
      expiresIn: "1d",
    });
    user={
        _id: user._id,
        fullname: user.fullname,
        email: user.email,
        phoneNumber: user.phoneNumber,
        role: user.role,
    }
    return res.status(200).cookie('token',token,{maxAge: 24 * 60 * 60 * 1000, httpOnly: true}).json({
        massage: `Login successful ,Welcome back ${user.fullname}`,
        user,
        success: true,
    })
  } catch (error) {}
};

export const logOut=async (req,res)=>{
    try {
        res.clearCookie('token');
        return res.status(200).json({
            message: "Logout successful",
            success: true,
        });
    } catch (error) {
        console.error("Error during logout:", error);
        return res.status(500).json({ message: "Internal server error", success: false });
    }
}

