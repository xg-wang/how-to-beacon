const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

app.use(express.static("client"));
app.use(bodyParser.text());

app.post("/track", (req, res) => {
  console.log("req: ", req.body);
  res.send("ok");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
