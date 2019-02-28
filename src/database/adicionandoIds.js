let alunos = require("./database/alunos.json");
const shortid = require("short-id");
const editJsonFile = require("edit-json-file");
// const comparaNome = (aluno, nome) => aluno.nome == nome;
// console.log(alunos.filter(aluno => comparaNome(aluno, "Jéssica Amaral Dias")));

const file = editJsonFile("newFile.json");

const adicionaId = aluno => (aluno.id = shortid.generate());
alunos.map(aluno => adicionaId(aluno));
file.data = alunos;
