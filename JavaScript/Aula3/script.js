// let dd = prompt("Digite algo: ")

let a = 5
let b = '5'
let c = 2

//Operadores Aritméticos
console.log(a % c)

//Operadores Relacionais
console.log(a === b) //false

//Operadores Lódigos
console.log(!a > c) //false


//Condições
let num = true;

if (typeof num === "number") {
  if (a < 3) {
    console.log("a é menor que 3")
  } else if (a === 3) {
    console.log("a é estritamente igual a 3")
  } else {
    console.log("Nenhuma das condições foram atendidas")
  }
} else {
  console.log("Nem é um número")
}


// Loopings
//FOR

console.log('\n')
console.log('Looping FOR')

for(let i = 0; i <= 10; i++){
    console.log(`${i}. Olá`)
}


//while
//primeiro ele verifica depois ele faz (por isso ele não existe)
console.log('\n')
console.log('Looping WHILE')


let j = 11
while( j <= 10 ){
  console.log(`${j}. Olá`)
  j++
}

//do ... while
//primeiro ele faz depois ele verifica
console.log('\n')
console.log('Looping DO...WHILE')

let k = 8 
do{
    console.log(`${k}. Olá`)
    k--
}while(k >= 0)

//este passa a primeira e para quando verifica
let l = 11
do{
    console.log(`${k}. Olá`)
    l++
 }while(l <= 10)

let numero  = 6
//verificar se é número par ou ímpar
if (numero % 2 === 0) {
  return "O número é par";
} else {
  // Caso contrário, o número é ímpar
  return "O número é ímpar";
}