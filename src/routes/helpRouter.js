const express = require("express");
const routes = express.Router();

const HelpController = require("../controller/HelpController");
routes.get("/help", HelpController.show);

module.exports = routes;
