botaoAdicionar.addEventListener("click", function(event){
  event.preventDefault();                                                       //Função que impede o comportamento padrão da função HTML, para poder atravez do script ter um novo tratamento.

  var form = document.querySelector("#tabela");                                 //Seleciona o ID do form do Botão lá do HTML

  var paciente = obterPacienteDoFormulario(form);                               //recebendo as informações da função obterPacienteDoFormulario qe tem como parametro o form, depois atribuir o retorno a uma nova variavel chamada de paciente;

  var erros = validaPaciente(paciente); //  variável de erro criada recebendo parametro

  console.log(erros);
  if(erros.length > 0){
    exibeMensagensDeErro(erros);
    return;                                                                     //impede que o paciente seja cadastrado na tabela mesmo que esteja inválido;
  };

  form.reset();

  var mensagensErro = document.querySelector("#mensagens-erro");
  mensagensErro.innerHTML = "";

});

function adicionaPacienteNaTabela(paciente){
  var pacienteTr = montaTr(paciente);
  var tabela = document.querySelector("#tabela-pacientes");                     //seleção da função de corpo do HTML e criação de uma variável no JavaScript
  tabela.appendChild(pacienteTr);                                               //Retorno dos dados para a função do HTML
}

function exibeMensagensDeErro(erros){
  var ul = document.querySelector("#mensagens-erro");
  ul.innerHTML = "";//Limpa as mensagens de erro da tela (para atualizar)

  erros.forEach(function(nErro){//(para cada item do meu array voce vaifazer alguma coisa)(nErro = nova variável que vai ser os ciclos) Parecido com o laço For só que ele roda a quantidade necessaria "erros";
        var li = document.createElement("li");//cria um elemento li no HTML
        li.textContent = nErro;
        ul.appendChild(li);
  });
}

//------------------------Obter Paciente do Formulário------------------------//

function obterPacienteDoFormulario(form){                                       // função que obtem os dados do formulario de um paciente

  var paciente = {                                                              // a variavel paciente aqui cria um container para que dentro dela, tenha varios parametros pois, não existe somente um paciente, mas pode existir vários.
    nome: form.nome.value,
    peso: form.peso.value,
    altura: form.altura.value,
    gordura: form.gordura.value,
    imc: calculaImc(form.peso.value, form.altura.value)
  }

  return paciente;                                                              //Retornando os dados obtidos;
}

//----------------------------------------------------------------------------//

//-----------------------------montar paciente tr-----------------------------//

function montaTr(paciente){
  var pacienteTr = document.createElement("tr");
  pacienteTr.classList.add("paciente");

  pacienteTr.appendChild(montarTd(paciente.nome, "info-nome"));
  pacienteTr.appendChild(montarTd(paciente.peso, "info-peso"));
  pacienteTr.appendChild(montarTd(paciente.altura, "info-altura"));
  pacienteTr.appendChild(montarTd(paciente.gordura, "info-gordura"));
  pacienteTr.appendChild(montarTd(paciente.imc, "info-imc"));

  return pacienteTr;
}

function montarTd(dado, classe){                                                //função que cria td onde recebe como parametro o dado = a informação que vai ser escrita e a classe = que se refere a qual campo esse dado está sendo armazenado;
  var td = document.createElement("td");
  td.textContent = dado;
  td.classList.add(classe);

  return td;
}
//----------------------------------------------------------------------------//

function validaPaciente(paciente){

  var erros = []; //como a função só retorna um unico valor, é necessario a criação desse array para que ele capture varios resultados e retorne;

  if(paciente.nome.length == 0){
    erros.push("Defina o nome do Paciente");
  }

  if(paciente.peso.length == 0){
    erros.push("Defina o Peso");
  }

  if(!validaPeso(paciente.peso)){//se o peso não for valido "!"
    erros.push("Peso Inválido"); // a função push escreve esse resultado dentro de um espaço no array
  }

  if(paciente.altura.length == 0){
    erros.push("Defina a Altura");
  }

  if(!validaAltura(paciente.altura)){
    erros.push("Altura Inválida");
  }

  if(paciente.gordura.length == 0){
    erros.push("Defina o Percentual de Gordura");
  }

  return erros;//retornando os valores capturados para o array;
}
