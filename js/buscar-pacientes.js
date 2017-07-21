var botaoAdicionar = document.querySelector("#buscar-pacientes");

botaoAdicionar.addEventListener("click", function () {
  console.log("cliquei no botao");

  //XMLHttpRequest = Requisições http do tipo tipo xml
  var xhr = new XMLHttpRequest();

  //GET = Capturar dados
  xhr.open("GET", "http://api-pacientes.herokuapp.com/pacientes");

  xhr.addEventListener("load", function(){//load = Carregar
    //responseText = Texto da Resposta ou os dados em texto;
    console.log(xhr.responseText);
  });

  //send = enviar
  xhr.send();

});
