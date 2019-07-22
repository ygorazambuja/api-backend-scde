const express = require("express");
const routes = express.Router();

const AlunoController = require("./controller/AlunoController");
const RecadoController = require("./controller/RecadoController.");
const HelpController = require("./controller/HelpController");
const UserController = require("./controller/UserController");
const DocumentacaoController = require("./controller/DocumentacaoController");

routes.post("/postar", AlunoController.store);
routes.post("/bulk", AlunoController.bulkStore);
routes.post("/user", UserController.store);
routes.post("/recado", RecadoController.store);
routes.post("/documentacao", DocumentacaoController.save);
routes.post("/authenticateUser", UserController.authenticateUser);

routes.get("/alunos", AlunoController.index);
routes.get("/aluno/:id", AlunoController.getById);
routes.get("/recado/:id", RecadoController.getById);
routes.get("/recados", RecadoController.index);
routes.get("/help", HelpController.show);
routes.get("/user/:id", UserController.getById);
routes.get("/user", UserController.index);
routes.get("/documentacao", DocumentacaoController.getAll);
routes.delete("/user/:id", UserController.deleteUserById);

routes.put("/documentacao", DocumentacaoController.update);
module.exports = routes;
