const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/node-api", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB Connection Succeeded.");
  } catch (err) {
    console.error("Error in DB connection:", err);
    process.exit(1);
  }
};

module.exports = connectDB;
