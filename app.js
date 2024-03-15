const express = require("express");
const app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/:name", (req, res) => {
  let { name } = req.params;
  res.render("index", { name });
});
//
//port callback
app.listen(3000, () => {
  console.log("server is listen 3000");
});
