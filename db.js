const mongoose = require("mongoose");
require("dotenv").config();
const mongoURL = process.env.MONGODB_URL_LOCAL;
// const mongoURL = process.env.MONGODB_URL;

mongoose.connect(mongoURL, {
  usenewURLParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("connected", () => {
  console.log("connected to Mongodb server");
});
db.on("error", (err) => {
  console.error("mongodb connection error", err);
});
db.on("disconnected", () => {
  console.log("mongodb disconnected");
});

module.exports = db;
