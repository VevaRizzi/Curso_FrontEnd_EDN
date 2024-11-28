//DOM

//declaração de variáveis
let h1 = document.querySelector('#titulo')
let p = document.querySelector(".paragrafo")
let body = document.querySelector("body")
let botao = document.querySelector('#dark-mode')
let quadrado = document.querySelector('.quadrado')
let h2 = document.querySelector("h2")

// //alterar conteúdo
h1.innerHTML = "<marquee>Estou usando DOM</marquee>"


function addRemove(){
    h1.classList.toggle("titulo");

}

function darkMode() {
    //add cor de fundo no body
    body.classList.toggle("dark");
}

function Entrar() {
    //quadrado ficar azul
    quadrado.style.backgroundColor = "blue"
    quadrado.innerHTML = "Entrou!"
}

function Sair() {
    //quadrado ficar azul
    quadrado.style.backgroundColor = "yellow"
    quadrado.innerHTML = "Saiu!"
}
function Clicar() {
    //quadrado ficar azul
    quadrado.style.backgroundColor = "orange"
    quadrado.innerHTML = "Clicou!"
}


//Quando a pessoa clicar no meu h1
h1.addEventListener('click', addRemove)
botao.addEventListener('click', darkMode)
quadrado.addEventListener('click', Entrar)

//Ao passar o mouse em cima
//mouse entrar = mouseenter
quadrado.addEventListener('mouseenter', Entrar)

//mouse sai = mouseout
quadrado.addEventListener('mouseout', Sair)

//click
quadrado.addEventListener('click', Clicar)

//Saber o conteúdo do h2
h2.textContent = "Abobrinha"