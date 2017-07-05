
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

  var pesoValido = validaPeso(peso);                                            //busca o valor true ou false das funções validaPeso e atribui na variável
  var alturaValido = validaAltura(altura);

  if(!pesoValido){                                                              //O simbolo de "!" se refere a negação então ele está perguntado se o peso não for válido execute a função;
    tdimc.textContent = "Peso Inválido!";
    pesoValido = false;
    cliente.classList.add("cliente-invalido");                                  //função responsavem de chamar uma função criada no css para mudar a cor;
  }

  if(!alturaValido){
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

function validaPeso(peso){                                                      //valida o peso para retornar true ou false
  if(peso >= 0 && peso <= 1000){
    return true;
  }else {
    return false;
  }
}

function validaAltura(altura){                                                  //valida altura para retornar true ou false
  if(altura >= 0 && altura <= 3.00){
    return true;
  }
    return false;
}

function calculaImc(peso,altura){                                               // função responsavel por calcular o imc trazendo os parametros e retornando;
  var imc = 0;

  imc = peso / (altura * altura);

  return imc.toFixed(2);                                                        //toFixed função que determina o limite de casas decimais que aparecem
}
