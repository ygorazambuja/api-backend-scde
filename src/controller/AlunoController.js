const Aluno = require("../models/Aluno");

module.exports = {
    async index(req, res) {
        try {
            const alunos = await Aluno.find({}).sort("-ano");
            return res.json(alunos);
        } catch (err) {}
    },
    async store(req, res) {
        try {
            const aluno = await Aluno.create(req.body);
            return res.json(aluno);
        } catch (err) {}
    },
    async bulkStore(req, res) {
        try {
            const alunos = req.body;
            await Aluno.collection.insert(alunos);
            return res.json(alunos);
        } catch (err) {}
    },
    async getById(req, res) {
        try {
            const aluno = await Aluno.findById(req.params.id);
            return res.json(aluno);
        } catch (err) {}
    },
};
