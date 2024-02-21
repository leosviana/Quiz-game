
// ###################### BOTÃO DE OPÇÕES ######################
//1 - Quando selecionar uma opção, dar uma descrição de “marcado” 
//2 - Ajustar para a cor de verde
//3 - Marcar as outras opções com a cor azul

var statusOpA = "desmarcado";
var statusOpB = "desmarcado";
var statusOpC = "desmarcado";

//function btOpcoes(){ //Não foi necessário incluir função do botão 
    var opA = document.getElementById("op-a"); //Opção A
    var opB = document.getElementById("op-b"); //Opção B
    var opC = document.getElementById("op-c"); //Opção C
    var idQuiz = document.getElementById("id-quiz").innerHTML = "QUIZ " + 1; //Número do quiz
    var idPergunta = document.getElementById("id-pergunta").innerHTML = 1; //Número da pergunta

    // Adiciona um evento de clique a todos os elementos com a classe "op"
    document.querySelectorAll('.op').forEach(function(botao){
      botao.addEventListener('click', function(){        
        var idDoBotao = this.id; // Obtém o ID do botão clicado
          
        switch (idDoBotao){ // Executa ação com base no ID do botão
          case 'op-a': //Caso clique no botão da opção A            
            opA.style.backgroundColor = "green";
            opB.style.backgroundColor = "blue";
            opC.style.backgroundColor = "blue";
            statusOpA = "marcado";
            statusOpB = "desmarcado";
            statusOpC = "desmarcado";
            console.log("Teste a -> " + statusOpA);
            console.log("Teste b -> " + statusOpB); 
            console.log("Teste c -> " + statusOpC); 
            break;
          case 'op-b': //Caso clique no botão da opção B
            opA.style.backgroundColor = "blue";
            opB.style.backgroundColor = "green";
            opC.style.backgroundColor = "blue";
            statusOpA = "desmarcado";
            statusOpB = "marcado";
            statusOpC = "desmarcado";
            console.log("Teste a -> " + statusOpA);
            console.log("Teste b -> " + statusOpB); 
            console.log("Teste c -> " + statusOpC); 
            break;
          case 'op-c': //Caso clique no botão da opção C
            opA.style.backgroundColor = "blue";
            opB.style.backgroundColor = "blue";
            opC.style.backgroundColor = "green";
            statusOpA = "desmarcado";
            statusOpB = "desmarcado";
            statusOpC = "marcado";
            console.log("Teste a -> " + statusOpA);
            console.log("Teste b -> " + statusOpB); 
            console.log("Teste c -> " + statusOpC); 
            break;
          default:
            console.log("Botão não reconhecido");
        }
      });
    });
  //}

// ###################### BOTÃO DE RESPOSTA ######################
//1 - Iniciar quiz sem a imagem, resposta e mensagem de acerto;
//2 - Inserir um contador do numero da pergunta;
//3 - Ao clicar no botão “responder”, precisa armazenar qual opção foi selecionada (a, b ou c);
//4 - Verificar se a opção selecionada é igual a opção correta da pergunta;
//5 - Se sim, exibir que o usuário acertou a resposta;
//6 - Mostrar a imagem e a resposta ao usuário;
//7 - Ocultar o botão “responder”;
//8 - Mostrar o botão “Próximo” (Próxima pergunta);

function btResponder(){
  var responder = document.getElementById("responder");

  if ((statusOpA == "desmarcado") && (statusOpB == "desmarcado") && (statusOpC == "desmarcado")){
    var msg = document.getElementById("mensagem").innerHTML = "Marque uma das opções.";
    //document.removeChild("msg");
    console.log("status esta desmarcado");
  }else{    
    console.log("status esta marcado");
    console.log("ID QUIZ: " + idQuiz);
    console.log("ID PERGUNTA: " + idPergunta);
    idQuiz = +1;
  }

  //escrever em atributos id:
  //https://www.w3schools.com/jsref/prop_html_innerhtml.asp

  //esconder atributos:
  //https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_toggle_hide_show

  //remover atributos:
  //https://www.w3schools.com/js/js_htmldom_document.asp





}





