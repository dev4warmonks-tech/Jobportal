const mongoose = require("mongoose");

const jobCategorySchema = new mongoose.Schema({
  jobCategory: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  is_active: {
    type: Boolean,
    default: true,
  },
});

module.exports = mongoose.model("JobCategory", jobCategorySchema);
