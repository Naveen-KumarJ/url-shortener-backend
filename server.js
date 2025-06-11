require("dotenv").config();
const express = require("express");
const router = require("./routes/urlRoutes");
const { urlencoded } = require("body-parser");
const mongoose = require("mongoose");

const app = express();
const PORT = 8080;

app.use(express.json());
app.use(urlencoded({ extended: true }));
app.use(router);

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log("Database Connected Successfully"))
  .catch((error) => console.log("Database Connection Failed " + error.message));

app.listen(PORT, () => console.log(`Server is Running on PORT: ${PORT}`));
