const express = require("express");
const res = require("express/lib/response");
const app = express();
// const mongoose = require("mongoose");
const user = require("./routes/user");
const { connectDB } = require("./config/connectDB");
connectDB();
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv");
dotenv.config();

app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.json("content-type", "application/json"));

app.use("api/user", user);
app.get("/", (req, res) => {
  res.send("Home");
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server Connected With Port ${PORT}`);
});
