const help = require('../database/help.json')

module.exports = {
  show (req, res) {
    return res.json(help)
  }
}
