/*
Calculadora Básica

Crie uma função chamada Calculadora que receba três argumentos:
dois números e uma operação matemática (+, -, *, /)

A função deve realizar a operação e retornar o resultado. Se a operação for
inválida, retorna uma mensagem de erro.
*/

// Criar uma função chamada calculadora
// três argumentos:  dois números e uma operação matemática
// resultado: num1 op num2
// se o parametro tal for blabla
    // faça tal coisa
    //se for inválida, retorne erro



function calculadora(num1, num2, operador) {
    // let num1 = int(input("Digite um número: "))
    // let num2 = int(input("Digite outro número: "))
    // let operador = input("Digite um operador: ")
    switch (operador) {
        case "+" : 
        resultado = num1 + num2
        case "-" : 
        resultado = num1 - num2
        case "*" : 
        resultado = num1 * num2
        case "/" : 
            if (num1 === 0 | num2 === 0){
                resultado = "Impossível dividir por zero."
            }else{
            resultado = num1 / num2
            }
        break
        default:
            resultado = "Operador inválido."

    }
    return resultado
}


console.log(calculadora(50, 7, "*"))

// let resultado = calculadora(10, 5, "*");
// console.log(resultado); // Imprime: 50