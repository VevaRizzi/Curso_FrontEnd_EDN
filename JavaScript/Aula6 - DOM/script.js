//DOM

// let titulo = document.getElementsByTagName("h1")

let botao = document.querySelector("#submit-btn")
//quando clicarem no botao
// let nomePet = document.querySelector("#nome-pet")


function Enviar(){
    // event.preventDefault()

    let nomePet = document.querySelector("#nome-pet").value
    // let portePet = document.getElementsByName("#porte").value
    // let especiePet = document.getElementsByName("#especie").value
    let racaPet = document.querySelector("#raca").value
    let obsPet = document.querySelector("#observacoes").value

    let nomeDono = document.querySelector("#nome_dono").value
    let telDono = document.querySelector("#tel").value
    let cpfDono = document.querySelector("#cpf").value
    let cepDono = document.querySelector("#cep").value
    let num_residencia = document.querySelector("#num_residencia").value
    let complemento = document.querySelector("#complemento").value
    let info_add = document.querySelector("#info_add").value
    
    
    alert(
        `Nome do Pet: ${nomePet}\n`+
        `Raça: ${racaPet}\n`+
        `Observações: ${obsPet}\n`+
        `Dono: ${nomeDono}\n`+
        `Telefone: ${telDono}\n`+
        `Cpf: ${cpfDono}\n`+
        `CEP: ${cepDono}\n`+
        `Numero: ${num_residencia}\n`+
        `Complemento: ${complemento}\n`+
        `Informações Adicionais: ${info_add}\n`
      )
    // return alert(nomePet)
}  