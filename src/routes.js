const express = require("express");
const routes = express.Router();

const AlunoController = require("./controller/AlunoController");

routes.get("/alunos", AlunoController.index);
routes.post("/postar", AlunoController.store);
routes.post("/bulk", AlunoController.bulkStore);

module.exports = routes;
