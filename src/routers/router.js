const express = require("express");
const router = express.Router();
const controller = require("../controllers/controller");

router.get("/", controller.renderHome);
router.get("/create", controller.renderCreateUser);

router.get("/u/:uname", controller.renderUser);

module.exports = router;
