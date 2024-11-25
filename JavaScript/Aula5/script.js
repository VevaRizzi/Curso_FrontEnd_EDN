let nome = "Veronica"

// se for dia 25 fale olá

switch(nome) {
    case "Veronica":
        console.log('Você é linda')
    break

    case "Natal":
        console.log('Parece Nerd')
        break
    default:
        console.log('Não consegui te reconhecer')
}

//Array == Vetor == Lista
let frutas = ["Banana", "Manga", "Maçã", "Kiwi","Uva", "Morango", "Abacate","Ameixa"]

//Manipulação
//push = adiciona no final
frutas.push("Jaca")

//pop = exclui o último
frutas.pop()

//shift = exclui o primeiro
frutas.shift()

//unshift = adiciona no começo
frutas.unshift("Banana")

console.log(frutas)
console.log(frutas.length) //8 Tamanho
console.log(frutas[0]) //Banana - Primeiro Elemento
console.log(frutas[7]) //Ameixa - Era o ultimo elemento - agora adicionamos JACA.
console.log(frutas[frutas.length - 1]) //Último elemento
