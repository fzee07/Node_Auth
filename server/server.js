const express = require("express");
const app = express();

// app.listen(3000, () => {
//   console.log("Server connected");
// });

const mongoose = require("mongoose");

const dbURI =
  "mongodb+srv://node-auth:Node_Auth@cluster0.pax0e.mongodb.net/node-auth";

mongoose
  .connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((result) => {
    app.listen(3000, () => {
      console.log("Server Connected");
    });
    console.log("DB Connected");
  })
  .catch((error) => {
    console.log(error);
  });
