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
    opcorreta: "Opção A",         //Opção Correta
    imgResp: "/img/img_teste.png",
    explicacao: "Piririri...",      //Resposta
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
opA.innerHTML = conhecimentosGerais.opa;   //Conteudo do objeto da opção A
var opB = document.getElementById("op-b"); //Declarando elemento HTML no JS -> Opção B
opB.innerHTML = conhecimentosGerais.opb;   //Conteudo do objeto da opção B
var opC = document.getElementById("op-c"); //Declarando elemento HTML no JS -> Opção C
opC.innerHTML = conhecimentosGerais.opc;   //Conteudo do objeto da opção C
var opCorreta = conhecimentosGerais.opcorreta; //Conteudo do objeto da opção Correta

//MENSAGEM
//var msg = document.getElementById("mensagem"); //Declarando campo de mensagem do HTML
var novaMsg; //Declarando variável de nova mensagem;
var nada;

//RESPOSTA
var responder = document.getElementById("responder"); //Declarando botão responder do HTML


// ###################### BOTÃO DE OPÇÕES ######################
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
    if (caixaQuiz.contains(novaMsg)){ //Se conter mensagem criada
      caixaOpcoes.removeChild(novaMsg); //Remover mensagem
    }    
  });
});

// ###################### BOTÃO RESPONDER ######################
function btResponder(){ //Botão Responder
  //Verifica se uma das opções foram selecionadas
  if ((statusOpA == "desmarcado") && (statusOpB == "desmarcado") && (statusOpC == "desmarcado")){ //Se todos botões estiverem com status "desmarcado"
    
    if (caixaQuiz.contains(novaMsg)){ //Se existir mensagem criada:
      while(caixaQuiz.novaMsg){ //Repete...
        caixaQuiz.removeChild(caixaQuiz.novaMsg); //Apaga mensagem novamente
      }
    }else{ //Se não existir mensagem criada:
      msg = "Marque uma das opções";
      novaMensagem(msg);
    } 
  }else{ //Se o status de uma das opções já estiver como "marcada", então:
    responder.style.display = "none"; //Oculta o botão "responder"
    proximo.style.display = "block"; //Mostra o botão "próximo"
    opA.disabled = "true"; //Travar botão "Opção A"
    opB.disabled = "true"; //Travar botão "Opção B"
    opC.disabled = "true"; //Travar botão "Opção C"
    opcaoCorreta(); //Verificar se a resposta está correta
    exibirResposta(conhecimentosGerais.imgResp, conhecimentosGerais.explicacao); //Exibir imagem e explicação

    console.log("ID QUIZ: " + conhecimentosGerais.numQuiz);
    console.log("ID PERGUNTA: " + conhecimentosGerais.numPergunta);
    ++conhecimentosGerais.numPergunta;
  }

function novaMensagem(msg){ //Criar nova mensagem
  //Criar elemento HTML <div class="mensagem" id="mensagem"> nova mensagem aqui </div>
  novaMsg = document.createElement("div"); //Criando novo elemento "div"
  novaMsg.id = "mensagem"; //id = "mensagem"
  novaMsg.className = "mensagem"; //class = "mensagem"
  novaMsg.innerHTML = msg; //Carregar e exibir mensagem
  caixaQuiz.appendChild(novaMsg); //Criar como filha abaixo da div "caixa-quiz"
  caixaOpcoes.insertAdjacentElement('beforeend', novaMsg); //Inserindo elemento antes "caixa-opcoes"
  
  // afterbegin  -> depois de começar
  // afterend    -> depois do fim
  // beforebegin -> antes de começar
  // beforeend   -> antes do fim
}

function opcaoCorreta(){ //Validar opção correta
      //Se opção A estiver marcada E opção A for igual Opção correta
  if ((statusOpA == "marcado" && opA.innerHTML == opCorreta) || // Ou
      //Se opção B estiver marcada E opção B for igual Opção correta
      (statusOpB == "marcado" && opB.innerHTML == opCorreta) || // Ou
      //Se opção C estiver marcada E opção C for igual Opção correta
      (statusOpC == "marcado" && opC.innerHTML == opCorreta)){
      msg = "Resposta certa!";
      novaMensagem(msg); //Exibir mensagem em tela
  }else{
    msg = "Resposta errada.";
    novaMensagem(msg); //Exibir mensagem em tela
    
    //Opção A == "marcado" E Opção B == Correta >> A == vermelho e B == verde
    if(statusOpA == "marcado" && opB.innerHTML == opCorreta){
      opA.style.backgroundColor = "red";
      opB.style.backgroundColor = "green";
    //Opção A == "marcado" E Opção C == Correta >> A == vermelho e C == verde
    }else if(statusOpA == "marcado" && opC.innerHTML == opCorreta){
      opA.style.backgroundColor = "red";
      opC.style.backgroundColor = "green";
    //Opção B == "marcado" E Opção A == Correta >> B == vermelho e A == verde
    }else if(statusOpB == "marcado" && opA.innerHTML == opCorreta){
      opB.style.backgroundColor = "red";
      opA.style.backgroundColor = "green";
    //Opção B == "marcado" E Opção C == Correta >> B == vermelho e C == verde
    }else if(statusOpB == "marcado" && opC.innerHTML == opCorreta){
      opB.style.backgroundColor = "red";
      opC.style.backgroundColor = "green";
    //Opção C == "marcado" E Opção A == Correta >> C == vermelho e A == verde
    }else if(statusOpC == "marcado" && opA.innerHTML == opCorreta){
      opC.style.backgroundColor = "red";
      opA.style.backgroundColor = "green";
    //Opção C == "marcado" E Opção B == Correta >> C == vermelho e B == verde
    }else if(statusOpC == "marcado" && opB.innerHTML == opCorreta){
      opC.style.backgroundColor = "red";
      opB.style.backgroundColor = "green";
    }     
  }
}

function exibirResposta(img, explic){
  //Criando elemento "div" da caixa de resposta
  caixaResposta = document.createElement("div");
  caixaResposta.id = "caixa-resposta"; //Inserindo nome do id
  caixaResposta.className = "caixa-resposta"; //Inserindo nome da classe
  caixaQuiz.appendChild(caixaResposta); //Criando dentro da div "caixa-quiz"
  caixaOpcoes.insertAdjacentElement('afterend', caixaResposta); //Inserindo após a div "caixa-opcoes"

  //Criando elemento "div" da imagem da resposta
  divImg = document.createElement("div");
  caixaResposta.appendChild(divImg); //Criando dentro da div da caixa de resposta
  imgResposta = document.createElement("img"); //Criando elemento "img"
  imgResposta.id = "img-resposta"; //Inserindo nome do id
  imgResposta.className = "img-resposta"; //Inserindo nome da classe
  imgResposta.src = img; // arquivo da imagem
  divImg.appendChild(imgResposta); //Criando dentro da div da imagem

  //Criando elemento "div" da explicação
  msgExplicacao = document.createElement("div");
  msgExplicacao.id = "resposta"; //Inserindo nome do id
  msgExplicacao.className = "resposta"; //Inserindo nome da classe
  msgExplicacao.innerHTML = explic; //Exibindo explicação em tela
  divImg.insertAdjacentElement('afterend', msgExplicacao); //Inserindo após o elemento div de imagem
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





