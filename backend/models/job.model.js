const { application } = require("express");
const mongoose = require("mongoose");

const job = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    salary: {
      type: Number, // e.g., "50,000 - 70,000"
      required: true,
    },
    location: {
      type: String, // e.g., "Remote", "On-site", "Hybrid"
      required: true,
    },
    jobType: {
      type: String, // e.g., "Full-time", "Part-time", "Internship"
      required: true,
    },
    requirements: [
      {
        type: String,
      },
    ],
    position: {
      type: Number,
      required: true,
    },
    company: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Company", // Reference to the Company model
      required: true,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", // Reference to the User model
      required: true,
    },
    applications: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Application", // Reference to the User model for applicants
      },
    ],
  },
  { timestamps: true }
);

export const Job = mongoose.model("Job", job);
