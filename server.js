const express = require("express");
const app = express();
const db = require("./db.js");
const bodyParser = require("body-parser");
app.use(bodyParser.json());

const MenuItem = require("./models/MenuItem");

app.get("/", function (req, res) {
  res.send("Hello World");
});

const personRoutes = require("./routes/personRoutes");
app.use("/person", personRoutes);

app.listen(3000, () => {
  console.log("listening on port 3000");
});
