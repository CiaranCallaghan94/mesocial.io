const express = require("express");
const axios = require("axios");
const router = express.Router();

const app = express();

app.use(express.static(__dirname + "/public"));
app.set("view engine", "pug");

app.get("/", async (req, res) => {
  res.render("index");
});

router.get("/profiles/:uname", async (req, res) => {
  const url = "http://localhost:3001/" + req.params.uname;
  const query = await axios.get(url);

  res.render("user", { profile: query.data });
});

//add the router
app.use("/", router);
app.listen(process.env.port || 3000);

console.log("Running at Port 3000");
