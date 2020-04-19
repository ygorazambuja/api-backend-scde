const express = require("express");
const routes = express.Router();

const UserController = require("../controller/UserController");

routes.get("/user/:id", UserController.getById);
routes.get("/user", UserController.index);
routes.delete("/user/:id", UserController.deleteUserById);
module.exports = routes;
