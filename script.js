let nome = prompt("Olá, qual seu nome?");
alert(`Olá ${nome}`);
let jogo = prompt(`${nome}, quer participar de um jogo?`);
if (jogo.toLowerCase() == "sim") {
    alert("Ok, vamos começar!");
    let numeroSecreto = Math.floor(Math.random() * 10) + 1;
    let acertou = false;
    let tentativas = 0 
    while (!acertou) {
        let chute = parseInt(prompt("Escolha um número de 1 a 10"));
        tentativas++;
        if (chute === numeroSecreto) {
            alert(`Parabéns, você descobriu o número secreto com ${tentativas} tentativas!`);
            acertou = true;
        } else {
            alert("Você errou... Tente novamente!");
        }
    }
} else {
    alert("Tudo bem... ;C");
}