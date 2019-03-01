const Recado = require('../models/Recado')

module.exports = {
  async index (req, res) {
    const recados = await Recado.find({}).sort('-createdAt')
    return res.json(recados)
  },
  async store (req, res) {
    const recado = await Recado.create(req.body)
    return res.json(recado)
  }
}
