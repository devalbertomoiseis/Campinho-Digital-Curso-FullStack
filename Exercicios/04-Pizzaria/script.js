function calcularConta(){
    const pegaValorConta = document.getElementById("valorConta");
    const pegaValorTaxa = document.getElementById("valorTaxa");
    const pegaQuantidadePessoa = document.getElementById("quantidade");
    const calcValueF = 
    parseInt(pegaValorConta.value) + parseInt(pegaValorTaxa.value) / parseInt(pegaQuantidadePessoa.value)
   
    const resultado = document.getElementById("resultado")
    resultado.innerHTML = calcValueF
}
function formEvent(){
  const form = document.getElementById("form")
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    calcularConta()
  })
}