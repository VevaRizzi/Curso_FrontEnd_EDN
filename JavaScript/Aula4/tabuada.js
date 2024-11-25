let num = Number(prompt('Digite um número: '));
let mensagem = `Tabuada do ${num}`

//Mostrar Tabuada de 0 a 10 do número
// for (let i = 1; i<=10; i++){
//     let resultado = num * i;
//     alert(`${num} x ${i} = ${resultado}`)
// }


//Quero um alert só que mostre toda a tabuada

for (let i = 1; i<=10; i++){
    let resultado = num * i;
    mensagem += `\n ${num} x ${i} = ${resultado}`
}
alert(mensagem);