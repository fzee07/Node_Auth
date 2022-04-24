const express = require("express");
const res = require("express/lib/response");
const app = express();
// const mongoose = require("mongoose");
const users = require("./routes/users");
const { connectDB } = require("./config/connectDB");
connectDB();
const cookieParser = require("cookie-parser");

app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.json());
app.use(function (req, res, next) {
  res.setHeader("content-type", "application/json");
  next();
});
app.all("*", function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-type,application/json");
  if (req.method == "OPTIONS") {
    res.status(200).end();
  } else {
    next();
  }
});

app.use("api/user", users);
app.use("/", () => {
  res.send("Home");
});

app.listen(8080, () => {
  console.log("Server connected");
});
