const express = require("express");
const app = express();

app.get("/", (req, res, next) => {
  res.json("nice job ken");
});

app.listen(3000, () => {
  console.log("nice kid");
});
