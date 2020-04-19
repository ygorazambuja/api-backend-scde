const express = require("express");
const routes = express.Router();

const alunosRouter = require("./alunosRoutes");
const documentacaoRouter = require("./documentacaoRouter");
const helpRouter = require("./helpRouter");
const recadoRouter = require("./recadoRouter");
const authRouter = require("./authRouter");

routes.use(alunosRouter);
routes.use(documentacaoRouter);
routes.use(helpRouter);
routes.use(recadoRouter);
routes.use(authRouter);

module.exports = routes;
