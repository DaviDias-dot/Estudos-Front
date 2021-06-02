function novoAluno(nome, idade) {
    return { nome, idade }
}

let alunos = [
    novoAluno("Mario", 23),
    novoAluno("José", 45),
    novoAluno("Marcia", 29),
    novoAluno("Joao", 35),
]

function nomeIdade(aluno) {
    return aluno.nome + "tem " + aluno.idade + " anos";
}

console.log(alunos.map(nomeIdade));