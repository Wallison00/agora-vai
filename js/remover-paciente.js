var pacientes = document.querySelectorAll(".paciente");

pacientes.forEach(function(paciente){                                           //forEach = parecido com o laço for, só que tem como parametro de limite o tamanho do meu array, que neste caso é o array pacientes;
  paciente.addEventListener("dblclick", function(){                             //dblclick = é um evento de duplo click
    console.log(paciente);
    this.remove();                                                              //remove() = Função de Remoção / this = palavra de contexto que Significa esta; faz com que o atributo que recebeu o duplo click seja escutado; este evento está atrelado ao paciente;
  });
});
