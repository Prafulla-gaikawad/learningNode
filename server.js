const express = require("express");
const app = express();
const db = require("./db.js");
const bodyParser = require("body-parser");
app.use(bodyParser.json());
require("dotenv").config();
const PORT = process.env.PORT || 3000;

const MenuItem = require("./models/MenuItem");

app.get("/", function (req, res) {
  res.send("Hello World");
});

const personRoutes = require("./routes/personRoutes");
app.use("/person", personRoutes);

app.listen(PORT, () => {
  console.log("listening on port 3000");
});
