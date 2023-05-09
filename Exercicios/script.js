/*
  Crie uma variável que receberá o promtp perguntando qual o nome.
  Crie um alert que receberá uma frase de boas vindas juntamente com o nome.
*/

let nomeUser = prompt("Digite seu nome: "); // String
let nomeHTML = document.querySelector("#questao01");
nomeHTML.innerHTML = `Boas Vindas ${nomeUser}`


/*
  Crie um alert que dará a mensagem “Seja vem vindo à padaria Bela”
  Crie uma variavel que receberá o prompt perguntando em quantos amigos a conta será dividida.
  Crie uma variavel que receberá o resultado: o valor do cento dividido pela quantidade de amigos.
  Crie um alert que exibirá a mensagem: “Ficou para cada um o valor de ???“.
*/
let qtdAmigos = parseInt(prompt("Digite a quantidade de amigos"))
let contaAmigos = parseInt(prompt("Qual valor da conta ?"))
let amigos = document.querySelector("#amigos");
let resultadoConta = contaAmigos/qtdAmigos;
amigos.innerHTML = `
  <h3>Seja vem vindo à padaria Bel</h3>
  <p >
    Quantidade de amigos é ${qtdAmigos} e o total da conta é ${contaAmigos}, 
    ficou para cada amigo o valor de <strong class="cor"> ${resultadoConta} </strong>
  <p>
`

/*
  Crie uma variável que receberá o promtp perguntando qual o peso de Clara.
  Crie uma variável que receberá o promtp perguntando qual a altura de Clara.
  Crie uma variavel para colocar o resultado do IMC.
  DICA: IMC é calculado dividindo o peso (em kg) pela altura ao quadrado (em metros)
*/
let pesoUser = parseFloat(prompt("Digite seu peso: "))
let alturaUser = parseFloat(prompt("Digite seu altura: "))
let imc = document.querySelector("#imc");
let resultadoImc = pesoUser / (alturaUser * alturaUser)
imc.innerHTML = `
  <h3>IMC</h3>
  <p>
    Qual seu peso ${pesoUser} e  sua altura é ${alturaUser}, 
    o resultado do seu IMC é :  <strong class="cor"> ${resultadoImc.toFixed(3)} </strong> !
  <p>
`