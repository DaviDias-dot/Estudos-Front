function calcMedia() { return (this.notas[0] + this.notas[1]) / 2 }

var aluno = {
    nome: "Davi",
    notas: [5, 8],
    media: calcMedia
}

var aluno1 = {
    nome: "Rafa",
    notas: [9, 8],
    media: calcMedia
}

console.log(aluno.nome)
console.log(aluno.media(aluno.notas[0], aluno.notas[1]))

console.log(aluno1.nome)
console.log(aluno1.media())