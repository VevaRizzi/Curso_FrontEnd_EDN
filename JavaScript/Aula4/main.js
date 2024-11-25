//Looping

for(let i = 0; i < 10; i++){
    console.log(i)
}

let resp = 'n'
while(resp === 's'){
    console.log(`Olá`)
    resp = prompt ('Digite outra coisa sem ser "s"')
}

let resposta = 'n'
do{
    console.log(`Olá`)
    resp = prompt ('Digite outra coisa sem ser "s"')
}while(resposta === 's')

    