const mongoose = require("mongoose");

const dbURI =
  "mongodb+srv://node-auth:Node-Auth@cluster0.pax0e.mongodb.net/node-auth";

mongoose
  .connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    usecreateIndex: true,
  })
  .then((result) => {
    console.log("db connected");
  })
  .catch((error) => {
    console.log(error);
  });
