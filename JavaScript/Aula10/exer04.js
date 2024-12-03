//Aplicando FUNCTIONS 

function Tabuada(num){
        let mensagem 
        mensagem = `Tabuada do ${num}\n`

        for (let i = 1; i<=10; i++){
        let resultado = num * i ;
        mensagem += `${num} X ${i} = ${resultado}\n`
    }
    return mensagem
}
console.log(Tabuada(7))

const dobro = (num) => num * 2
//console.log(dobro(66))

//ARROW FUNCTION
const TABUADA = (num2) => {
    let mensagem 
    mensagem = `Tabuada do ${num}\n`

    for (let i = 1; i<=10; i++){
    let resultado = num * i ;
    mensagem += `${num} X ${i} = ${resultado}\n`
}
return mensagem
}



const calculadora = (x, y) => 
    let resultado = 