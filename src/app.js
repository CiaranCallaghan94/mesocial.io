const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");

const app = express();
const router = require("./router");

app.use(helmet());
app.use(morgan("combined"));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));
app.set("views", "views");
app.set("view engine", "pug");

app.use("/", router);
app.listen(process.env.port || 8080);
console.log("Running at Port 8080");
