/*
Contexto do Projeto

Objetivo: Exibir o clima atual de uma cidade selecionada pelo usuário, 
incluindo temperatura, condições do tempo, umidade e velocidade do vento.

Ferramentas Utilizadas:
HTML5: Estrutura do formulário e exibição dos dados.
JavaScript/jQuery: Para realizar a chamada AJAX e manipular o DOM dinamicamente.
API OpenWeatherMap: Fornece os dados meteorológicos em tempo real.
CSS: Organização dos elementos para melhor usabilidade

DOC: https://openweathermap.org/current

USING: https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=pt_br
*/

const API_KEY = 'f8fcbcf29e9f947f571de7f2f44d5254';

$("#carregarClima").on('click', function(){
    const cidade = $(#cidadeInput).val()
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${apiKey}&units=metric&lang=pt_br`

        $.ajax({
            url: "https://openweathermap.org/current",
            type: "GET",

        })


})





// function carregarClima(){
//     const cidade = $(#cidadeInput).val()

//     const url = `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${apiKey}&units=metric&lang=pt_br`
    

//     $.ajax({
//         url: "https://openweathermap.org/current",
//         type: "GET",
//         success: function(resposta){
//             //limpar minha lista
//             $("#dadosClima").empty()

//             resposta.forEach(city=> {
//                 $("#dadosClima").append(`
//                     <li>
//                     Cidade: ${city.name} 
//                     Temperatura: ${humidity.value}°C 
//                     Umidade: ${temperature.value}%  
//                     Ventos: ${wind.speed}km/h
//                     </li>`)
//             });
//         },
//         error: function(erro){
//             console.error(`ERRO: ${erro}`)
//             $("#dadosClima").html("<li>Erro ao carregar dados do clima</li>");
//         }
//     })
// }

// btn.on("click", buscarCidade)

// humidity.value 
// temperature.value
// clouds.value 
// wind.speed