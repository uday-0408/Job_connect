import { Company } from "../models/company.model.js";
import cloudinary from "../utils/cloudinary.js";
import getDataUri from "../utils/datauri.js";

export const registerCompany = async (req, res) => {
  try {
    console.log("registerCompany called");
    const { companyName } = req.body;
    console.log("Request Body:", req.body);

    if (!companyName) {
      console.warn("Company name missing in request");
      return res.status(400).json({
        message: "Company name is required",
        success: false,
      });
    }

    const company = await Company.findOne({ name: companyName });
    console.log("Existing Company Check:", company);

    if (company) {
      console.warn("Company already exists");
      return res.status(400).json({
        message: "Company already exists",
        success: false,
      });
    }

    const company_obj = await Company.create({
      name: companyName,
      description: req.body.description || "",
      website: req.body.website || "",
      location: req.body.location || "",
      logo: req.body.logo || "",
      userId: req.id,
    });

    console.log("Company Created:", company_obj);

    return res.status(201).json({
      message: "Company registered successfully",
      company: company_obj,
      success: true,
    });
  } catch (error) {
    console.error("registerCompany Error:", error);
    return res.status(500).json({
      message: `Internal Server Error from registerCompany: ${error.message}`,
      success: false,
      error: error.message,
    });
  }
};

export const getCompany = async (req, res) => {
  try {
    console.log("getCompany called");
    const userId = req.id;
    console.log("User ID:", userId);

    const companies = await Company.find({ userId: userId });
    console.log("Companies found:", companies);

    if (!companies || companies.length === 0) {
      console.warn("No companies found for user");
      return res.status(404).json({
        message: "No companies found for this user",
        success: false,
      });
    }

    return res.status(200).json({
      message: "Companies retrieved successfully",
      companies,
      success: true,
    });
  } catch (error) {
    console.error("getCompany Error:", error);
    return res.status(500).json({
      message: `Internal Server Error from getCompany: ${error.message}`,
      success: false,
      error: error.message,
    });
  }
};

export const getCompanyById = async (req, res) => {
  try {
    console.log("getCompanyById called");
    const companyId = req.params.id;
    console.log("Company ID:", companyId);
    if (!companyId || companyId === "undefined") {
      return res.status(400).json({
        message: "Invalid company ID",
        success: false,
      });
    }
    const company = await Company.findById(companyId);
    console.log("Company Found:", company);

    if (!company) {
      console.warn("Company not found");
      return res.status(404).json({
        message: "Company not found",
        success: false,
      });
    }

    return res.status(200).json({
      message: "Company retrieved successfully",
      company,
      success: true,
    });
  } catch (error) {
    console.error("getCompanyById Error:", error);
    return res.status(500).json({
      message: `Internal Server Error from getCompanyById: ${error.message}`,
      success: false,
      error: error.message,
    });
  }
};

export const updateCompany = async (req, res) => {
  try {
    console.log("updateCompany called");
    const companyId = req.params.id;
    const { companyName, description, website, location } = req.body;
    const file = req.file;
    console.log("Request Params:", req.params);
    console.log("Request Body:", req.body);
    console.log("Uploaded File:", file);

    let logo = "";

    if (!companyName) {
      console.warn("Company name missing in update request");
      return res.status(400).json({
        message: "Company name is required",
        success: false,
      });
    }

    try {
      if (file) {
        console.log("uploading To cloudinary");
        const fileUri = getDataUri(file);
        const cloudResponse = await cloudinary.uploader.upload(
          fileUri.content,
          {
            resource_type: "raw",
            folder: "Job Portal",
            public_id: `Job Portal/${file.originalname}`,
            use_filename: true,
            unique_filename: false,
          }
        );
        if (cloudResponse && cloudResponse.secure_url) {
          logo = cloudResponse.secure_url;
          console.log("Logo uploaded to Cloudinary:", logo);
        }
      }
    } catch (error) {
      console.error(error);
    }

    const company = await Company.findByIdAndUpdate(
      companyId,
      {
        companyName: companyName,
        userId: req.id,
        description: description || "",
        website: website || "",
        location: location || "",
        logo: logo || "",
      },
      { new: true }
    );

    console.log("Company Updated:", company);

    if (!company) {
      console.warn("Company not found for update");
      return res.status(404).json({
        message: "Company not found",
        success: false,
      });
    }

    return res.status(200).json({
      message: "Company updated successfully",
      company,
      success: true,
    });
  } catch (error) {
    console.error("updateCompany Error:", error);
    return res.status(500).json({
      message: `Internal Server Error from updateCompany: ${error.message}`,
      success: false,
      error: error.message,
    });
  }
};
