var prova1 = 5;
var prova2 = 5.8;

var media = prova1 + prova2 / 2

var conceito = "";

if (media > 7) {
    conceito = "Ótimo";
} else if (media >= 6.5) {
    conceito = "Bom";
} else {
    conceito = "regular";
}

console.log(media)
console.log(conceito)

switch (conceito) {
    case "Ótimo":
        console.log("Parabéns, você esta ótimo");
        break
    case "Bom":
        console.log("Você está quase perfeito");
        break
    case "Regular":
        console.log("Estude mais um pouco");
        break

    default:
        console.log("Houve algum erro");
        break
}