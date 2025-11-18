const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const jobRoutes = require("./routes/jobRoutes");

const app = express();

connectDB();
app.use(cors());
app.use(express.json());

// Mount job routes
app.use("/api/jobs", jobRoutes);

app.listen(5000, () => console.log("Server running on port 5000"));
