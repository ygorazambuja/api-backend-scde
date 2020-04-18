const mongoose = require("mongoose");

const AlunoSchema = new mongoose.Schema(
    {
        nome: String,
        serie: String,
        ano: Number,
    },
    { timestamps: true }
);

module.exports = mongoose.model("Aluno", AlunoSchema);
