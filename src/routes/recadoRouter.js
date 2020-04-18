const express = require("express");
const routes = express.Router();

const RecadoController = require("../controller/RecadoController.");

routes.post("/recado", RecadoController.store);

routes.get("/recado/:id", RecadoController.getById);
routes.get("/recados", RecadoController.index);

module.exports = routes;
