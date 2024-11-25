//Matriz

let matriz = [
    ["Pietro", 22, "RJ"],
    ["Veronica", 34, "SP"],   
    ["Ricardo", 47, "BH"] 
]

console.log(matriz.length) // Tamanho 3
console.log(matriz[0]) //Primeiro elemento = ["Pietro", 22, "RJ"]
console.log(matriz[1])
console.log(matriz[matriz.length - 1]) //Ultimo elemento
console.log(matriz[0][0]) // Pietro elemento
console.log(matriz[1][2]) //Segunda linha pega só o terceiro elemento (SP)
console.log(matriz[1][0]) //Segunda linha, primeiro elemento (verônica)

//Criar looping para percorrer minha matriz

for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[0].length; j++){
        console.log(matriz[i][j])
    }
}

