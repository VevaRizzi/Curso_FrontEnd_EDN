//Exercícios Usando Lista

//Exercício 1: Calcular aumento de salário
/*
Imagine que você é responsável pelo departamento de Recursos Humanos
e precisa aplicar um aumento salarial de 10% aos funcionários. 
Os salários estão armazenados em uma lista, e você deve usar um
loop para calcular o novo salário de cada um.
*/

let salarios = [2140, 3560, 5100, 4500, 8000]
let aumento = 10
// 

for (let i = 0; i < salarios.length; i++) {
        let reajuste = salarios[i] * aumento /100
        let novo_salario = salarios[i] + reajuste
        console.log(`Os novos salários são: R$ ${novo_salario}`)
    }


//Exercício 2: Organizar Tarefas

/*
Você tem uma lista de tarefas organizadas por ordem de 
criação e percebe que precisa começar pelas mais recentes. 
Para isso, você deve inverter a ordem da lista manualmente.
*/

let bandas = ["P.O.D.", "Papa Roach", "Story of The Year", "Limp Bizkit", "Offspring", "Incubus", "Sublime with Rome", "The Aggrolites", "The Dirty Heads"]
    bandas.sort()
    console.log("Em ordem alfabética:")
    console.log(bandas)

    bandas.reverse()
    console.log("\nEm ordem inversa:")
    console.log(bandas)

let bandasInvertidas = []
for (let i = bandas.length - 1; i >= 0; i--) {
    bandasInvertidas.push(bandas[i])
}
console.log(bandasInvertidas)




//Exercício 3: Contar votos
/* 
Durante uma eleição para representante de turma, 
os votos de cada aluno foram armazenados em uma lista. 
Agora, é sua responsabilidade contar quantas vezes cada candidato foi votado.
*/

let candidatos = [1, 1, 2, 3, 4, 1, 3, 2, 4, 2, 2, 3, 4, 4, 4, 1, 1, 2, 2, 3]
// let contagem_votos = {}

let candidato1 = 0
let candidato2 = 0
let candidato3 = 0
let candidato4 = 0

for (let i = 0; i < candidatos.length; i++) {
    if(candidatos[i] == 1){
        candidato1++

    }else if(candidatos[i] == 2){
        candidato2++

    }else if(candidatos[i] == 3){
        candidato3++
    }else if(candidato4[i] == 4){
        candidato4++
    }
}



// Inicializa a contagem de votos para cada candidato
// candidatos.forEach(candidato => {
//     contagem_votos[candidato] = 0
// });


// for (let i = 0; i < votos_alunos.length; i++) {
//     let voto = votos_alunos[i]
//     contagem_votos[voto]++
// }

// console.log("Contagem de votos:")
// console.log(contagem_votos)