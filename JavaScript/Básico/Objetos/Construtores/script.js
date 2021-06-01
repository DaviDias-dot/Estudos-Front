function criarAluno(nome, n1, n2) {
    return {
        nome: nome,
        nota1: n1,
        nota2: n2,
        media: function() {
            return (this.nota1 + this.nota2) / 2;
        }
    }
}

var turma = [
    criarAluno("Davi", 10, 5),
    criarAluno("Rafa", 10, 7.5),
]

var aluno = turma[0];

turma.forEach(function(elemento) {
    console.log(elemento.nome, elemento.media())
})