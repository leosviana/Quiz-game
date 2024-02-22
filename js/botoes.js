// ###################### OBJETO ######################
//CONTRUTOR OBJETO QUIZ
/*class Quiz{
  constructor(valor1, valor2, valor3, valor4, valor5, valor6){
    this.pergunta = valor1;
    this.opa = valor2;
    this.opb = valor3;
    this.opc = valor4;
    this.opcorreta = valor5;
    this.resposta = valor6;
  }
}*/

//OBJETO TESTE
const conhecimentosGerais = { //Criando objeto Quiz - Pergunta 1
    numQuiz: 1,
    numPergunta: 1,
    pergunta: "Qual é tarara...", //Pergunta
    opa: "Opção A",               //Opção A
    opb: "Opção B",               //Opção B
    opc: "Opção C",               //Opção C
    opcorreta: "Opção B",         //Opção Correta
    resposta: "Resposta...",      //Resposta
}

// ###################### INICIAR SEM ALGUNS ELEMENTOS ######################
proximo.style.display = "none"; //Esconder o botao proximo


// ###################### BOTÃO DE OPÇÕES ######################
//1 - Quando selecionar uma opção, dar uma descrição de “marcado” 
//2 - Ajustar para a cor de verde
//3 - Marcar as outras opções com a cor azul

//QUIZ
var caixaQuiz = document.getElementById("caixa-quiz");
var idQuiz = document.getElementById("id-quiz").innerHTML = "QUIZ " + conhecimentosGerais.numQuiz; //Número do quiz

//PERGUNTA
var idPergunta = document.getElementById("id-pergunta").innerHTML = conhecimentosGerais.numPergunta; //Número da pergunta
var pergunta = document.getElementById("pergunta").innerHTML = conhecimentosGerais.pergunta;

//OPÇÕES
var statusOpA = "desmarcado"; //Iniciar status das opções como desmarcada
var statusOpB = "desmarcado"; // --
var statusOpC = "desmarcado"; // --
var caixaOpcoes = document.getElementById("caixa-opcoes");
var opA = document.getElementById("op-a"); //Declarando elemento HTML no JS -> opção A
opA.innerHTML = conhecimentosGerais.opa;   //Conteudo da opção A
var opB = document.getElementById("op-b"); //Declarando elemento HTML no JS -> Opção B
opB.innerHTML = conhecimentosGerais.opb;   //Conteudo da opção B
var opC = document.getElementById("op-c"); //Declarando elemento HTML no JS -> Opção C
opC.innerHTML = conhecimentosGerais.opc;   //Conteudo da opção C
var opCorreta = conhecimentosGerais.opcorreta; //Opção Correta

//MENSAGEM
var msg = document.getElementById("mensagem");
var novaMensagem;

//RESPOSTA


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
    /*if ((novaMensagem == "") || (novaMensagem == null) || (novaMensagem == undefined)){
      //msg.display = "none";
      console.log("removido");

    }else{*/
      //3.1.3 - Ao selecionar opção, excluir mensagem;  
      caixaQuiz.removeChild(novaMensagem);    
      //caixaOpcoes.removeChild("novaMensagem");
    /*}*/
    
  });
});

// ###################### BOTÃO DE RESPOSTA ######################
//1 - Iniciar quiz sem a imagem, resposta e mensagem de acerto;
//2 - Inserir um contador do numero quiz e do número da pergunta;
//3 - Ao clicar no botão “responder”:
//3.1 - Validar se os botão estão selecionados;
//3.1.1 - Se sim, continuar processo normal;
//3.1.2 - Se não, exibir mensagem para selecionar uma opção pelo menos;
//3.1.3 - Ao selecionar opção, excluir mensagem;
//3.2 - Esconder o botão Responder”;
//3.3 - Mostrar o botão “Próximo” (Próxima pergunta);
//3.4 - Precisa armazenar qual opção foi selecionada (a, b ou c);
//3.5 - Verificar se a opção selecionada é igual a opção correta da pergunta;
//3.6 - Se sim, exibir que o usuário acertou a resposta;
//3.7 - Se não, exibir que o usuário errou a resposta;
//3.7.1 - Mudar cor da opção selecionada para vermelha;
//3.7.2 - Mudar cor da opção correta para verde;
//3.7.3 - A opção que sobrar deixa de azul;
//3.8 - Mostrar a imagem e a resposta ao usuário;



function btResponder(){ //Botão Responder
  var responder = document.getElementById("responder");

  

  //Verifica se uma das opções foram selecionadas
  if ((statusOpA == "desmarcado") && (statusOpB == "desmarcado") && (statusOpC == "desmarcado")){    
    //if (novaMensagem == ""){
    novaMensagem = document.createElement("div");
    novaMensagem.id = "mensagem";
    novaMensagem.className = "mensagem";
    novaMensagem.innerHTML = "Marque uma das opções.";
    caixaQuiz.appendChild(novaMensagem);
    caixaOpcoes.insertAdjacentElement('afterend', novaMensagem);
    //}else{
      
    //}    
    //msg.innerHTML = "Marque uma das opções.";
    //document.removeChild("msg");
    //console.log("status esta desmarcado");
  }else{ //Se uma das opções estiver selecionada, então:
//3.2 - Esconder o botão Responder”;
//3.3 - Mostrar o botão “Próximo” (Próxima pergunta);
responder.style.display = "none"; //Oculta o botão "responder"
proximo.style.display = "block"; //Mostra o botão "próximo"


//3.4 - Precisa armazenar qual opção foi selecionada (a, b ou c);
//3.5 - Verificar se a opção selecionada é igual a opção correta da pergunta;
//3.6 - Se sim, exibir que o usuário acertou a resposta;
//3.7 - Se não, exibir que o usuário errou a resposta;
//3.7.1 - Mudar cor da opção selecionada para vermelha;
//3.7.2 - Mudar cor da opção correta para verde;
//3.7.3 - A opção que sobrar deixa de azul;
//3.8 - Mostrar a imagem e a resposta ao usuário;
    console.log("status esta marcado");
    console.log("ID QUIZ: " + conhecimentosGerais.numQuiz);
    console.log("ID PERGUNTA: " + conhecimentosGerais.numPergunta);
    ++conhecimentosGerais.numPergunta;
  }

// ###################### BOTÃO PROXIMA PERGUNTA ######################
//1 - Iniciar quiz sem a imagem, resposta e mensagem de acerto;
//2 - Iniciar contador do numero quiz igual ao que está;
//3 - Adicionar +1 ao contador do número da pergunta;
//4 - Esconder botão “responder”;
//5 - Limpar status das opções selecionadas (a, b ou c);
//4 - Verificar se a opção selecionada é igual a opção correta da pergunta;
//5 - Se sim, exibir que o usuário acertou a resposta;
//6 - Mostrar a imagem e a resposta ao usuário;
//7 - Ocultar o botão “responder”;
//8 - Mostrar o botão “Próximo” (Próxima pergunta);
/*function btProximo(){


  ++contadorQuiz;

}*/

  //escrever em atributos id:
  //https://www.w3schools.com/jsref/prop_html_innerhtml.asp

  //esconder atributos:
  //https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_toggle_hide_show

  //remover atributos:
  //https://www.w3schools.com/js/js_htmldom_document.asp





}





