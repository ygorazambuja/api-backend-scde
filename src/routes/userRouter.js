const express = require("express");
const routes = express.Router();

const UserController = require("../controller/UserController");

routes.post("/user", UserController.store);
routes.post("/user", UserController.store);
routes.get("/user/:id", UserController.getById);
routes.post("/user", UserController.store);
routes.get("/user", UserController.index);
routes.delete("/user/:id", UserController.deleteUserById);

module.exports = routes;
