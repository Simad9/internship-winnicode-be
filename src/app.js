// src/app.js
const express = require("express");
const cors = require("cors");
const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
const Routes = require("./routes/routes.js");
app.use("/api/", Routes);

// Default route
app.get("/", (req, res) => {
  res.send("API is running 🚀");
});

module.exports = app;
