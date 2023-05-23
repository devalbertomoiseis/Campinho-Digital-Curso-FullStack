/*
  Crie uma variável que receberá o promtp perguntando qual o nome.
  Crie um alert que receberá uma frase de boas vindas juntamente com o nome.
*/
// Questão 01
let numero = parseInt(prompt("Digite um número: "));
let numeroHTML = document.querySelector("#questao01");
numeroHTML.innerHTML = `O número é ${numero} * 2 = ${numero * 2}`
if(numero % 2 == 0){
  numeroHTML.innerHTML = `
  <p class=".cor-positivo">O resultado é ${numero} o valor é um número par!</p>`
}else{
  numeroHTML.innerHTML = `
  <p class=".cor-negativo">O resultado é ${numero} o valor é um número impar!</p>
  `
}

// Questão 02
let valorJantar = parseInt(prompt("Qual valor do jantar ?"));
let diaDesconto = prompt("Digite o dia entre: sabado e domingo ?");
let valorGarcom = document.querySelector("#questao02");
let resultadoGarcom = valorJantar * 0.10
let resultadoOutro = valorJantar + (valorJantar * 0.10)
let resultadoDomingo = valorJantar + (valorJantar * 0.20)
let resultadoSabado = valorJantar + (valorJantar * 0.20)
if(diaDesconto == "sabado"){
  valorGarcom.innerHTML = `
  <p class="cor-positivo">
    O valor do jantar foi ${valorJantar},
    com taxa do garçom de ${resultadoGarcom} fica um total de ${resultadoSabado}
  </p>
 `
}else if(diaDesconto == "domingo"){
  valorGarcom.innerHTML = `
  <p class="cor-positivo">
    O valor do jantar foi ${valorJantar},
    com taxa do garçom de ${resultadoGarcom} fica um total de ${resultadoDomingo}
  </p>
 `
}else{
  valorGarcom.innerHTML = `
  <p class="cor-negativo">
    O valor do jantar foi ${valorJantar},
    com taxa do garçom de ${resultadoGarcom} fica um total de ${resultadoOutro}
  </p>
 `
}
// Questão 03
let valorPizza = parseInt(prompt("Digite o valor da Pizza: "));
let quantidadeClientes = parseInt(prompt("Digite quantos clientes tem: "));
let totalPizzaCliente = valorPizza / quantidadeClientes;
let totalHTML = document.querySelector("#questao03");

if(totalPizzaCliente >= 200){
  totalHTML.innerHTML = `
  <p class="cor-positivo">
  O valor da pizza ${valorPizza}, o total de clientes ${quantidadeClientes}
  e a quantidade para cada cliente é ${totalPizzaCliente}
  </p>`
}else{
  totalHTML.innerHTML = `
  <p class="cor-negativo">
  O valor da pizza ${valorPizza}, o total de clientes ${quantidadeClientes}
  e a quantidade para cada cliente é ${totalPizzaCliente.toFixed(2)}
  </p>
  `
}