const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("soy node");
});
app.get("/ping", (req, res) => {
  res.send({ ping: true });
});

app.listen(5001);
