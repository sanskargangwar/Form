const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db.js");
const userroutes = require("./controllers/userControllers.js")
const routes = require("./routes/userroutes.js")
require("dotenv").config();

const app = express();

connectDB();

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.use("/api", require("./routes/userroutes"));

app.listen(5000, () => {
  console.log("Server running on port 5000");
});