const Documentacao = require("../models/Documentacao");

module.exports = {
    async getAll(req, res) {
        try {
            const documentacoes = await Documentacao.find({});
            res.status(200).send(documentacoes);
        } catch (err) {
            res.status(500).send(err);
        }
    },
    async getById(req, res) {
        try {
            const documentacao = await Documentacao.findOne(req.body._id);
            return res.send(documentacao);
        } catch (err) {
            return res.send(err);
        }
    },
    async save(req, res) {
        try {
            const documentacao = await Documentacao.create(req.body);
            return res.send(documentacao);
        } catch (err) {
            return res.status(500).send(err);
        }
    },
    async update(req, res) {
        try {
            const _id = req.body._id;
            const documentacao = await Documentacao.findOneAndUpdate(
                { _id },
                req.body
            );
            return res.statusCode(204).send(documentacao);
        } catch (err) {
            return res.status(500).send(err);
        }
    }
};
