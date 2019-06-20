const help = require('../database/help.json')

module.exports = {
  show (req, res) {
    try {
      return res.json(help)
    } catch (err) {}
  }
}
