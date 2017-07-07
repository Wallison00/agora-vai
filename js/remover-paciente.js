var tabela = document.querySelector("table");

tabela.addEventListener("dblclick", function(event){
  event.target.parentNode.classList.add("fadeOut");

  setTimeout(function(){                                                        // setTimeout = Cria uma espera para que a função dentro dela só seja executada depois de toda a função anterior a ela já terminada;
    event.target.parentNode.remove();
  }, 1000);                                                                     //1000 = referente a 1000 milissegundos o que dá 1.0 segundo;
});
