const routes = require("express").Router();
const AuthController = require("../controller/AuthController");

routes.post("/login", AuthController.authenticateUser);
routes.post("/signin", AuthController.store);

module.exports = routes;
