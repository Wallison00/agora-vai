var campoFiltro= document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", function(){//input = função responsavel por escutar a entrada de valores como as do teclado.
  console.log(this.value);
   var pacientes = document.querySelectorAll(".paciente");

   if (this.value.length > 0) {
     for(var i=0; i < pacientes.length; i++){
       var paciente = pacientes[i];
       var tdNome = paciente.querySelector(".info-nome");
       var nome = tdNome.textContent;
       var expressao = new RegExp(this.value, "i");//RegExp = Expressão regular / "i" - aceita caracters tanto maiúsculos quanto minúsculos;

       if(!expressao.test(nome)){//teste = testa se a variavel do tipop nome é diferente(!) para aplicar a função invisivel;
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
