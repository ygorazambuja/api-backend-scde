const express = require('express')
const routes = express.Router()

const AlunoController = require('./controller/AlunoController')
const RecadoController = require('./controller/RecadoController.')

routes.get('/alunos', AlunoController.index)
routes.post('/postar', AlunoController.store)
routes.post('/bulk', AlunoController.bulkStore)

routes.post('/recado', RecadoController.store)
routes.get('/recados', RecadoController.index)

module.exports = routes
