const express = require("express");
const AlunoController = require("../controller/AlunoController");
const routes = express.Router();
const { verifyValidToken } = require("../middlewares");

routes.post("/postar", AlunoController.store);
routes.get("/alunos", AlunoController.index);
routes.get("/aluno/:id", verifyValidToken, AlunoController.getById);
routes.post("/bulk", AlunoController.bulkStore);
routes.get("/aluno?:q", AlunoController.searchByName);

module.exports = routes;
