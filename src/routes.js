const express = require('express')
const routes = express.Router()

const AlunoController = require('./controller/AlunoController')
const RecadoController = require('./controller/RecadoController.')
const HelpController = require('./controller/HelpController')

routes.post('/postar', AlunoController.store)
routes.post('/bulk', AlunoController.bulkStore)
routes.post('/recado', RecadoController.store)

routes.get('/alunos', AlunoController.index)
routes.get('/aluno/:id', AlunoController.getById)
routes.get('/recado/:id', RecadoController.getById)
routes.get('/recados', RecadoController.index)
routes.get('/help', HelpController.show)

module.exports = routes
