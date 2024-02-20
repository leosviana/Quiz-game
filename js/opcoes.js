//1 - Quando selecionar uma opção, dar uma descrição de “marcado” 
//2 - Ajustar para a cor de verde
//3 - Marcar as outras opções com a cor azul


function opcoes() {
    var opA = document.getElementById("op-a"); //Opção A
    var opB = document.getElementById("op-b"); //Opção B
    var opC = document.getElementById("op-c"); //Opção C
    var status = "desmarcado"; 

    // Adiciona um evento de clique a todos os elementos com a classe "op"
    document.querySelectorAll('.op').forEach(function(botao){
      botao.addEventListener('click', function() {        
        var idDoBotao = this.id; // Obtém o ID do botão clicado
          
        switch (idDoBotao) { // Executa ação com base no ID do botão
          case 'op-a': //Caso clique no botão da opção A            
            opA.style.backgroundColor = "green";
            opB.style.backgroundColor = "blue";
            opC.style.backgroundColor = "blue";
            var status = "marcado";
            console.log("Teste a -> " + status);            
            
            break;
          case 'op-b': //Caso clique no botão da opção B
            opA.style.backgroundColor = "blue";
            opB.style.backgroundColor = "green";
            opC.style.backgroundColor = "blue";
            var status = "marcado";
            console.log("Teste b -> " + status);
            break;
          case 'op-c': //Caso clique no botão da opção C
            opA.style.backgroundColor = "blue";
            opB.style.backgroundColor = "blue";
            opC.style.backgroundColor = "green";
            var status = "marcado";
            console.log("Teste c -> " + status);
            break;
          default:
            console.log("Botão não reconhecido");
        }
      });
    });
  }
