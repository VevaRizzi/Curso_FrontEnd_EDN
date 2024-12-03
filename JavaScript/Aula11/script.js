//Jquery


/*
Biblioteca do Javascript
*/

// let h1 document.querySelector("#titulo")
let h1 = $("#titulo")
let p = $("#mensagem")
let botao = $("#btn-msg")
let quadrado = $("#quadrado")

// function trocarMensagem() {
//     p.text("Você clicou no botão")
// }

// function Entrar(){
//     quadrado.css('background-color', 'yellow')
//     quadrado.text("Entrou")
//   }
  
//   function Sair(){
//     quadrado.css('background-color', 'red')
//     quadrado.text("Saiu")
//   }
  
//   function Clicar(){
//     quadrado.css('background-color', 'green')
//     quadrado.text("Clicou")
//   }


// h1.innerHTML = ""
h1.text("Estou usando Jquery")
// h1.style.color = "red
h1.css('color', 'red')


// botao.addEventListener("click", função)
botao.on('click', ()=> p.text("Você clicou no botão"))

quadrado.on('mouseenter', ()=> {
    quadrado.css('background-color', 'green')
    quadrado.text("Entrou")
})

quadrado.on('mouseout', ()=> {
    quadrado.css('background-color', 'red')
    quadrado.text("Saiu")
})
quadrado.on('click', ()=> {
    quadrado.css('background-color', 'yellow')
    quadrado.text("Clicou")
})


//AJAX

/*
Comunicação com o servidor.
Onde vc pode enviar/receber dados sem recarregar a página.

Deixando uma menor carga no servidor.
Melhorando o desempenho e tempo de carregamento.
*/
// https://jsonplaceholder.typicode.com/users


let btn = $("#carregarDados")

function CarregarDados(){
    $.ajax({
        url: "https://jsonplaceholder.typicode.com/users",
        type: "GET",
        success: function(resposta){
            //limpar minha lista
            $("#listaUsuarios").empty()
    
            //agora quero popular minha lista, 
            //colocar os usuários que pegamos(GET) da API.
            resposta.forEach(usuario => {
                $("#listaUsuarios").append(`<li>${usuario.name} - ${usuario.email}</li>`)
            });
        },
        error: function(erro){
            console.error(`ERRO: ${erro}`)
        }
    })
}

btn.on("click", CarregarDados)