var aluno = {
    matricula: 1234,
    nome: "Marcos",
    telefone: 987654432,
    cidade: "Barra do piraí"
}

var { nome, ...copia } = aluno;
copia.matricula = 654321;
console.log(copia)
console.log(aluno)
console.log(nome)