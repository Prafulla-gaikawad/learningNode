const mongoose = require("mongoose");

const mongoURL = "mongodb://localhost:27017/hotels";

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