
var novo_titulo = document.querySelector(".titulo");
novo_titulo.textContent = "Aparecida Nutricionista";

var clientes = document.querySelectorAll(".paciente");


for (var i = 0; i < clientes.length; i++) {

  var cliente = clientes[i];

  var tdpeso = cliente.querySelector(".info-peso");
  var peso = tdpeso.textContent;

  var tdaltura = cliente.querySelector(".info-altura");
  var altura = tdaltura.textContent;

  var tdimc = cliente.querySelector(".info-imc");

  var pesoValido = true;
  var alturaValido = true;

  if(peso >= 300 || peso <= 0){
    tdimc.textContent = "Peso Inválido!";
    pesoValido = false;
    cliente.classList.add("cliente-invalido");                                  // função responsavem de chamar uma função criada no css para mudar a cor;
  }

  if(altura >= 3.00 || altura <=0){
    tdimc.textContent = "Altura Inválida!";
    alturaValido = false;
    cliente.classList.add("cliente-invalido");                                  // função responsavem de chamar uma função criada no css para mudar a cor;
  }

  if (alturaValido && pesoValido){
    var imc = calculaImc(peso,altura);                                          // função calculaImc sendo puxada
    tdimc.textContent = imc;
  }
}

var botaoAdicionar = document.querySelector("#adicionar-paciente");             // Seleciona e localiza o botão adicionar do HTML


function calculaImc(peso,altura){                                               // função responsavel por calcular o imc trazendo os parametros e retornando;
  var imc = 0;

  imc = peso / (altura * altura);

  return imc.toFixed(2);                                                        //toFixed função que determina o limite de casas decimais que aparecem
}
