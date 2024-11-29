// Classe Pessoa

// Atributos
// nome
// sexo
// peso

// Métodos
// engordar
// emegrece


// Objetos
let pessoa_1 = {
  nome: "Pietro",
  sexo: "M",
  peso: 70.0,

  engordar(peso){
    this.peso = this.peso + peso
  },
  emagrecer(peso){
    if(this.peso > 0){
      this.peso = this.peso - peso
    }
  }
}

let pessoa_2 = {
  nome: "Lucy",
  sexo: "F",
  peso: 56.7,

  engordar(peso){
    this.peso = this.peso + peso
  },
  emagrecer(peso){
    if(this.peso > 0){
      this.peso = this.peso - peso
    }
  }
}

let pessoa_3 = {
  nome: "João",
  sexo: "M",
  peso: 83.5,

  engordar(peso){
    this.peso = this.peso + peso
  },
  emagrecer(peso){
    if(this.peso > 0){
      this.peso = this.peso - peso
    }
  }
}

let pessoa_4 = {
  nome: "Maria",
  sexo: "F",
  peso: 62.3,

  engordar(peso){
    this.peso = this.peso + peso
  },
  emagrecer(peso){
    if(this.peso > 0){
      this.peso = this.peso - peso
    }
  }
}

let pessoas = [pessoa_1, pessoa_2, pessoa_3, pessoa_4]

function renderPessoas(){
  let app = document.querySelector("#app")
  app.innerHTML = ""
  
  pessoas.forEach((pessoa,index) => {
    const card = document.createElement("div")
    card.classList.add("card")
  
    card.innerHTML = `
      <h2>${pessoa.nome}</h2>
      <p>Sexo: ${pessoa.sexo}</p>
      <p>Peso: ${pessoa.peso.toFixed(2)}</p>
      <button onclick='alterarPeso(${index}, 5)'>+5kg</button>
      <button onclick='alterarPeso(${index}, -5)'>-5kg</button>
    `
    app.appendChild(card)
  });
}


function alterarPeso(index, valor){
  const pessoa = pessoas[index]
  if(valor > 0){
    pessoa.engordar(valor)
  }else{
    pessoa.emagrecer(-valor)
  }
  renderPessoas()
}

renderPessoas()