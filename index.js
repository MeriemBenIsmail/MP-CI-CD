// app.js

const express = require("express");
const mongoose = require("mongoose");
const UserRoutes = require("./routes/User");

const app = express();
const port = 3000;

// Middleware to parse JSON in the request body
app.use(express.json());

// Connect to MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/MP-database");

const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});

app.use("/user", UserRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
