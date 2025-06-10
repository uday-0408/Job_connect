// const mongoose = require("mongoose");
import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
  fullname: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  phoneNumber: {
    type: Number,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
  },
  role: {
    type: String,
    required: true,
    enum: ["student", "recruiter"], // Define roles
  },
  profile: {
    bio: { type: String },
    skills: [{ type: String }],
    resume: { type: String }, // URL or path to resume file
    resumeOriginalName: { type: String }, // Original name of the resume file
    compony: { type: mongoose.Schema.Types.ObjectId, ref: "Company" }, // Reference to Company model
    profilePicture: { type: String, default: "" }, // URL or path to profile picture
  },
},{timestamps: true}); // Automatically manage createdAt and updatedAt fields

export const User = mongoose.model("User", userSchema);
