import mongoose from "mongoose";

const professionalSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  experienceLevel: String,
  highestEducation: String,
  currentCompany: String,
  preferredIndustry: String,
  preferredJobType: String,
  keySkills: [String], // Array of selected skills
});

module.exports = mongoose.model("ProfessionalDetails", professionalSchema);
