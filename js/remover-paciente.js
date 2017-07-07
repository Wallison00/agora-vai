var pacientes = document.querySelectorAll(".paciente");

var tabela = document.querySelector("table");

tabela.addEventListener("dblclick", function(event){
  event.target.parentNode.remove();                                             //parentNode(nó pai) = referente ao nó acima do target que foi clicado.
});
