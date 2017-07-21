var botaoAdicionar = document.querySelector("#buscar-pacientes");

botaoAdicionar.addEventListener("click", function () {

  //XMLHttpRequest = Requisições http do tipo tipo xml
  var xhr = new XMLHttpRequest();

  //GET = Capturar dados
  xhr.open("GET", "http://api-pacientes.herokuapp.com/pacientes");

  xhr.addEventListener("load", function(){//load = Carregar
    var resposta = xhr.responseText;

    //JSON.parse = transforma o responseText em objeto javascript
    var pacientes = JSON.parse(resposta);

    pacientes.forEach(function(paciente){
      //busca os dados externos e atribui a tabela já criada
      adicionaPacienteNaTabela(paciente);
    });
  });

  //send = enviar
  xhr.send();

});
