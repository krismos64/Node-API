const express = require("express");
const connectDB = require("./models/dbconfig");

const app = express();

// Connexion à la base de données
connectDB();

app.listen(5500, () => console.log("Server is running on port 5500"));
