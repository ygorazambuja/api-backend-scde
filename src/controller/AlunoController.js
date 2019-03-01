const Aluno = require('../models/Aluno')
module.exports = {
  async index (req, res) {
    const alunos = await Aluno.find({}).sort('-ano')
    return res.json(alunos)
  },
  async store (req, res) {
    const aluno = await Aluno.create(req.body)
    return res.json(aluno)
  },
  async bulkStore (req, res) {
    const alunos = req.body
    await Aluno.collection.insert(alunos)
    return res.json(alunos)
  }
}
