const Recado = require('../models/Recado')

module.exports = {
  async index (req, res) {
    try {
      const recados = await Recado.find({}).sort('-createdAt')
      return res.json(recados)
    } catch (err) {
      console.log(err)
    }
  },
  async store (req, res) {
    try {
      const recado = await Recado.create(req.body)
      return res.json(recado)
    } catch (err) {}
  }
}
