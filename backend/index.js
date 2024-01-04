const dotenv = require("dotenv").config();
const express = require("express");
const app = express();

const PORT = process.env.PORT || 5000;
const LOL = process.env.LOL === true;

app.use("/", (req, res) => {
  res.send("hi ");
});
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
