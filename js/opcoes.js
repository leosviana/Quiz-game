//1 - Quando selecionar uma opção, dar uma descrição de “marcado” 
//2 - Ajustar para a cor de verde
//3 - Marcar as outras opções com a cor azul


function opcoes() {
    var opa = document.getElementById("op-a");
    

    // Adiciona um evento de clique a todos os elementos com a classe "op"
    document.querySelectorAll('.op').forEach(function(botao) {
      botao.addEventListener('click', function() {
        // Obtém o ID do botão clicado
        var idDoBotao = this.id;
  
        // Executa ação com base no ID do botão
        switch (idDoBotao) {
          case 'op-a':
            console.log("Teste a" + opa);
            
            break;
          case 'op-b':
            console.log("Teste b");
            break;
          case 'op-c':
            console.log("Teste c");
            break;
          default:
            console.log("Botão não reconhecido");
        }
      });
    });
  }
