function calcularConta(){
    const pegaValorConta = document.getElementById("valorConta");
    const pegaValorTaxa = document.getElementById("valorTaxa");
    const pegaQuantidadePessoa = document.getElementById("quantidade");
    const calcValueF = 
    parseInt(pegaValorConta) + parseInt(pegaValorTaxa) / parseInt(pegaQuantidadePessoa)
   
    document.getElementById("resultado").innerHTML = calcValueF
}

function formEvent(){
  const form = document.getElementById("form")
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    console.log("Form Enviado")
  })
}