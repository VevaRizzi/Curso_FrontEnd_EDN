/*
Atividade: Obter uma dica aleatória para motivação diária

Contexto:
Imagine que você está criando uma página de motivação. Sempre que o usuário clicar em um botão, uma dica motivacional será exibida na tela. Essas dicas são fornecidas por uma API pública de frases motivacionais.

https://api.adviceslip.com/advice -> PRECISA CONVERTER DE JSON PARA OBJETO JS

O objetivo é praticar o uso de jQuery para manipular elementos da página e AJAX para buscar dados de uma API.

Instruções da atividade:
Crie uma página HTML com um botão chamado "Obter Dica".
Quando o botão for clicado, use o jQuery para fazer uma requisição AJAX para a API pública de frases motivacionais.
Exiba a dica motivacional recebida na página dentro de uma <div>.
*/


let btn = $("#dicas")
let frases = []

function CarregarDicas(){
    $.ajax({
        url: "https://api.adviceslip.com/advice",
        type: "GET",
        success: function(resposta){
            const dica = JSON.parse(resposta)
            // $("#apiDica").empty()
            $("#apiDica").append(`<div>${dica.slip.id} - ${dica.slip.advice}</div>`)
        },
        error: function(erro){
            console.error(`ERRO: ${erro}`)
        }
    })
}

btn.on("click", CarregarDicas)