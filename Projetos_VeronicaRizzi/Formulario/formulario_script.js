//DOM


//declaração de variáveis
let h1 = document.querySelector('#titulo')
let p = document.querySelector(".paragrafo")
let body = document.querySelector("body")
let botao = document.querySelector('#dark-mode')

// //alterar conteúdo
// h1.innerHTML = "Estou usando DOM"

// function addRemove(){
//     h1.classList.toggle("abobora");

// }

function darkMode() {
    //add cor de fundo no body
    body.classList.toggle("dark");
}

//Quando a pessoa clicar no meu h1
// h1.addEventListener('click', addRemove)
botao.addEventListener('click', darkMode)
