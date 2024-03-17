const express = require("express");
const app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  let myString = "<h1>hi</h1>";
  res.render("index", { myString });
});
//
//port callback
app.listen(3000, () => {
  console.log("server is listen 3000");
});
