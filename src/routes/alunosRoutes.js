const express = require("express");
const AlunoController = require("../controller/AlunoController");
const routes = express.Router();

routes.post("/postar", AlunoController.store);
routes.get("/alunos", AlunoController.index);
routes.get("/aluno/:id", AlunoController.getById);
routes.post("/bulk", AlunoController.bulkStore);

module.exports = routes;
