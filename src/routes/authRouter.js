const routes = require("express").Router();
const AuthController = require("../controller/AuthController");

routes.post("/authenticateUser", AuthController.authenticateUser);

module.exports = routes;
