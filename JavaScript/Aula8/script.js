// DOM

// Declaração de variaveis
let h1 = document.querySelector("#titulo")
let p = document.querySelectorAll(".paragrafo")
let body = document.querySelector("body")
let botao = document.querySelector("#dark-mode")
let quadrado = document.querySelector('.quadrado')
let h2 = document.querySelector("h2")

// Alterar conteúdo
h1.innerHTML = "<em>Estou usando DOM</em>"

// Colocar uma cor
p.forEach(element => {
  element.style.color = "blue"
});

// Colocar/Remover uma classe na minha tag
// h1.classList.add("abobora")
// h1.classList.remove("abobora")

function addRemove(){
  h1.classList.toggle("abobora")
}

function darkMode(){
  body.classList.toggle("dark")
}

function Entrar(){
  quadrado.style.backgroundColor = "blue"
  quadrado.innerHTML = "Entrou"
}

function Sair(){
  quadrado.style.backgroundColor = "red"
  quadrado.innerHTML = "Saiu"
}

function Clicar(){
  quadrado.style.backgroundColor = "green"
  quadrado.innerHTML = "Clicou"
}


h1.addEventListener('click', addRemove)
botao.addEventListener('click', darkMode)
// mouse entrar = mouseenter
quadrado.addEventListener('mouseenter', Entrar)
// sai = mouseout
quadrado.addEventListener('mouseout', Sair)
// click
quadrado.addEventListener('click', Clicar)

// Saber o conteúdo do h2
let escrito = h2.textContent
escrito = "<em>Abobrinha</em>"