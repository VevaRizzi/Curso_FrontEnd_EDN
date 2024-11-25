//Criar looping para percorrer minha matriz

let matriz_bandas = [
    ["Story of The Year", 2032009, "SP"],
    ["The Aggrolites", 15112023, "SP"],
    ["Offspring", 22032024, "SP"],
    ["P.O.D.", 22102024, "CWB"],
    ["Limp Bizkit", 23032024 , "SP"],   
    ["Incubus", 10042025 , "SP"] 
]

console.log(matriz_bandas.length) // Tamanho 3
console.log(matriz_bandas[0]) //Primeiro elemento
console.log(matriz_bandas[1])
console.log(matriz_bandas[matriz_bandas.length - 1]) //Ultimo elemento

console.log(matriz_bandas[1][2]) //Segunda linha pega só o terceiro elemento (SP)
console.log(matriz_bandas[1][0]) //Segunda linha, primeiro elemento 


//Criar looping para percorrer minha matriz

for (let i = 0; i < matriz_bandas.length; i++) {
    for (let j = 0; j < matriz_bandas[0].length; j++){
        console.log(matriz_bandas[i][j])
    }
}