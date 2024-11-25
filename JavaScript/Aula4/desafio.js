//Desafio: soma de números em um intervalo
//Escreva um programa que some todos os números de um intervalo dado 
//pelo usuário. Use o loop para realizar a soma.

let comeco = Number(prompt("Digite o número inicial do intervalo: "))
let fim = Number(prompt("Digite o número final do intervalo: "))
let soma = 0
//(prompt("Digite o número inicial do intervalo: "))

let mensagem = 'A soma deste intervalo é: '

for (let i = comeco ; i <= fim; i++){
    // soma += i;
    mensagem += `\n ${soma+=i}`
}

//alert(`A soma dos números no intervalo ${comeco} até ${fim} é ${soma}`)
alert(mensagem)
