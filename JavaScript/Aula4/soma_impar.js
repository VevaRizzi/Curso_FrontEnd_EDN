/* Desafio: soma de números ímpares
Peça ao usuário dois números Inteiros (início e fim de um intervalo).
Some todos os números ímpares dentro desse intervaloe  mostre o resultado.
*/


let inicio = Number(prompt("Digite o número inicial do intervalo: "))
let final = Number(prompt("Digite o número final do intervalo: "))
let soma = 0


for (let i = inicio; i <=final ; i ++){
    if (num % 2 == 1){
        soma += i
    }
}

alert(`A soma dos números impares de ${inicio} e ${final} é: ${soma}`)