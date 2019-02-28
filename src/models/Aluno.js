const mongoose = require("mongoose");

const AlunoSchema = new mongoose.Schema({
  nome: String,
  serie: String,
  ano: Number
});

module.exports = mongoose.model("Aluno", AlunoSchema);
