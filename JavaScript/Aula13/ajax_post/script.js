$('#enviar').on('click', function(){

    let nome = $("#nome").val()
    let cargo = $("#cargo").val()

    let dados = {
        name: nome,
        job: cargo
    }

    $.ajax({

        //este será o médoto post
        url: "https://reqres.in/api/users",
        type: "POST",
        contentType: "application/json",
        data: JSON.stringify(dados),
        //agora o sucesso com a resposta (será colocada dentro do PRE do HTML)
        success: function(resposta){
            $("#resposta").text(JSON.stringify(resposta, null, 2))
        },
        //e então temos o erro
        error: function(erro){
            $("#resposta").text(`ERRO: ${erro}`)

        }
    })
})