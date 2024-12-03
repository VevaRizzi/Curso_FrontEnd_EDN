/*
Escreva uma função chamada fizzBuzz que receba um número n e imprima números de 1 a n seguindo estas regras:

Se o número for divisível por 3 e 5, imprima "FizzBuzz".
Se o número for divisível por 3, imprima "Fizz".
Se o número for divisível por 5, imprima "Buzz".
Caso contrário, imprima o próprio número.

dica: if(num % 2 == 0)
*/

function fizzBuzz(n) {
  if ((n % 3) && (n % 5)) {
    resultado = "FIZZBUZZ"
  } else if (n % 3 == 0) {
    resultado = "FIZZ"
  } else if (n % 5 == 0) {
    resultado = "BUZZ"
  } else {
    resultado = "Você não fez FIZZBUZZ!"
  }
  return resultado
}

// console.log(fizzBuzz(2));


function fizzBuzz2(n){
    for (let i = 1; i <=n; i++) {
        if (i % 3 ==0 && i % 5 == 0) {
            console.log("FizzBuzz")
        }else if(i % 3 == 0){
            console.log("Fizz")
        }else if(i % 5 == 0){
            console.log("Buzz")
        }else{
            console.log(i)
        }
    }
}

fizzBuzz2(15)