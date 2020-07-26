const express = require("express");
const router = express.Router();
const controller = require("./controllers/controller");

router.get("/", controller.renderHome);
router.get("/create", controller.renderCreateUser);

router.get("/user/:uname", controller.renderUser);

module.exports = router;
