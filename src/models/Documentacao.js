const mongoose = require("mongoose");

const DocumentacaoSchema = new mongoose.Schema(
    {
        aluno: String,
        certidaoNascimento: { type: Boolean, default: false },
        comprovanteEndereco: { type: Boolean, default: false },
        carteiraVacina: { type: Boolean, default: false },
        declaracaoTransferencia: { type: Boolean, default: false },
        transferencia: { type: Boolean, default: false }
    },
    { timestamps: true }
);

module.exports = mongoose.model("Documentacao", DocumentacaoSchema);
