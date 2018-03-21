const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send({ Hey there: 'homie' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);
