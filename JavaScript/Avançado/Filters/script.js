function novoAluno(nome, idade) {
    return { nome, idade }
}

let alunos = [
    novoAluno("Mario", 23),
    novoAluno("José", 45),
    novoAluno("Marcia", 29),
    novoAluno("Joao", 35),
]

function temMenosDe30(alunos) {
    return alunos.idade < 30
}

let alunosComMenosDe30 = alunos.filter(temMenosDe30)

console.log(alunosComMenosDe30)