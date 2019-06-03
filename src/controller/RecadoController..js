const Recado = require("../models/Recado");

module.exports = {
    async index(req, res) {
        try {
            const recados = await Recado.find({}).sort("-createAt");
            return res.json(recados);
        } catch (err) {
            console.log(err);
        }
    },
    async store(req, res) {
        try {
            const recado = await Recado.create(req.body);

            req.io.emit("recado", recado);

            return res.json(recado);
        } catch (err) {}
    },
    async getById(req, res) {
        try {
            const recado = await Recado.findById(req.params.id);
            return res.json(recado);
        } catch (err) {
            console.log(err);
        }
    }
};
