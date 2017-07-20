var campoFiltro= document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", function(){//input = função responsavel por escutar a entrada de valores como as do teclado.
  console.log(this.value);
   var pacientes = document.querySelectorAll(".paciente");

   if (this.value.length > 0) {
     for(var i=0; i < pacientes.length; i++){
       var paciente = pacientes[i];
       var tdNome = paciente.querySelector(".info-nome");
       var nome = tdNome.textContent;

       if(nome != this.value){//this.value = valor atual
         paciente.classList.add("invisivel");
       }else {
         paciente.classList.remove("invisivel");
       }
     }
   }else {
     for (var i = 0; i < pacientes.length; i++) {
      var paciente = pacientes[i];
      paciente.classList.remove("invisivel");
     }
   }
})
