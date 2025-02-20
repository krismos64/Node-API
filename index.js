const express = require("express");
const connectDB = require("./models/dbconfig");
const postsRoutes = require("./routes/postsController");

const app = express();

// Connexion à la base de données
connectDB();

app.listen(5500, () => console.log("Server is running on port 5500"));
