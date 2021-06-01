var nomes = ["Davi", "Rafa", "Igor"];
var notas1 = [7.0, 8.5, 9.5];
var notas2 = [5.0, 4.5, 9.0]


function media(num1, num2) {
    return (num1 + num2) / 2
}

function passou(media) {
    if (media > 7) {
        return ("Aprovado");
    } else {
        return ("Reprovado");
    }
}

for (var index in nomes) {
    n1 = notas1[index]
    n2 = notas2[index]
    var m = media(n1, n2)
    console.log(nomes[index] + " - " + n1 + " - " + n2 + " - " +
        m + " - " + passou(m));
}