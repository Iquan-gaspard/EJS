const express = require("express");
const app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  const languages = [
    { name: "java", rating: 9 },
    { name: "python", rating: 9.7 },
  ];
  res.render("index", { languages });
});

app.get("/example", (req, res) => {
  let { name, age } = req.query;
  res.render("response", { name, age });
});

//port callback
app.listen(3000, () => {
  console.log("server is listen 3000");
});
