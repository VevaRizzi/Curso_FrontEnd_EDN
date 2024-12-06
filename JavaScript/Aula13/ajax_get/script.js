
$("#carregarDados").on(click, function(){

  $.ajax({
    url: "https://reqres.in/api/users",
    type: "GET",
    success: function(resposta){
      $("#listaUsuarios").empty()

      resposta.data.forEach(usuario => {
        // criar uma li na minha ul e colocar o primeiro e ultimo nome do usuario
        $("#listaUsuarios").append(`
          <li>${usuario.first_name} 
          ${usuario.last_name}
          </li>`)
      });

    },
    error: function(erro){
      $("#listaUsuarios").append(`<li>ERRO: ${erro}</li>`)
    }
  })


})
