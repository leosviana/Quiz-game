//1 - Quando selecionar uma opção, dar uma descrição de “marcado” 
//2 - Ajustar para a cor de verde
//3 - Marcar as outras opções com a cor azul


function opcoes() {
    var opA = document.getElementById("op-a");
    var opB = document.getElementById("op-b");
    var opC = document.getElementById("op-c");    

    // Adiciona um evento de clique a todos os elementos com a classe "op"
    document.querySelectorAll('.op').forEach(function(botao) {
      botao.addEventListener('click', function() {
        // Obtém o ID do botão clicado
        var idDoBotao = this.id;
  
        // Executa ação com base no ID do botão
        switch (idDoBotao) {
          case 'op-a':
            console.log("Teste a" + opA.id);
            var status = "marcado";
            opA.style.backgroundColor = "green";
            opB.style.backgroundColor = "blue";
            opC.style.backgroundColor = "blue";
            
            break;
          case 'op-b':
            console.log("Teste b");
            opA.style.backgroundColor = "blue";
            opB.style.backgroundColor = "green";
            opC.style.backgroundColor = "blue";
            break;
          case 'op-c':
            console.log("Teste c");
            opA.style.backgroundColor = "blue";
            opB.style.backgroundColor = "blue";
            opC.style.backgroundColor = "green";
            break;
          default:
            console.log("Botão não reconhecido");
        }
      });
    });
  }
