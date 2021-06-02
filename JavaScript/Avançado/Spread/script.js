var pessoa = {
    nome: "José Silva",
    idade: 32,
}

var contato = {
    telefone: 8765432,
    email: "jose@gmail.com"
}

var copia = {...pessoa, cidade: "Rio de Janeiro", ...contato }
copia.idade = 88;

console.log(pessoa);
console.log(copia)