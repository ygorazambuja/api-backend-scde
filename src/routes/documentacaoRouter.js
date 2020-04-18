const express = require("express");
const routes = express.Router();

const DocumentacaoController = require("../controller/DocumentacaoController");

routes.post("/documentacao", DocumentacaoController.save);
routes.get("/documentacao", DocumentacaoController.getAll);
routes.put("/documentacao", DocumentacaoController.update);

module.exports = routes;
