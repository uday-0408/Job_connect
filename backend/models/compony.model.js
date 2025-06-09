const mongoose = require("mongoose");

const compony = mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    description: {
      type: String,
    },
    website: {
      type: String,
    },
    location: {
      type: String,
    },
    logo: {
      type: String, // URL or path to the company logo
      default: "",
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", // Reference to the User model
      required: true,
    },
  },
  { timestamps: true }
);

export const Company = mongoose.model("Compony", compony);
