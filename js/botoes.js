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
      caixaQuiz.removeChild(novaMsg); //Remover mensagem
    }    
  });
});

function novaMensagem(msg){ //Criar nova mensagem
  //Criar elemento HTML <div class="mensagem" id="mensagem"> nova mensagem aqui </div>
  novaMsg = document.createElement("div"); //Criando novo elemento "div"
  novaMsg.id = "mensagem"; //id = "mensagem"
  novaMsg.className = "mensagem"; //class = "mensagem"
  novaMsg.innerHTML = msg; //Carregar e exibir mensagem
  caixaQuiz.appendChild(novaMsg); //Criar como filha abaixo da div "caixa-quiz"
  caixaOpcoes.insertAdjacentElement('afterend', novaMsg); //Inserindo após elemento "caixa-opcoes" 
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
  caixaResposta = document.createElement("div");
  caixaResposta.id = "caixa-resposta";
  caixaResposta.className = "caixa-resposta";
  caixaQuiz.appendChild(caixaResposta);
  caixaOpcoes.insertAdjacentElement('afterend', caixaResposta);

  divImg = document.createElement("div");
  divImg.id = "divimg";
  caixaResposta.appendChild(divImg);
  imgResposta = document.createElement("img");
  imgResposta.id = "img-resposta";
  imgResposta.className = "img-resposta";
  imgResposta.src = img; // /img/img_teste.png
  divImg.appendChild(imgResposta);
  

  msgExplicacao = document.createElement("div");
  msgExplicacao.id = "resposta";
  msgExplicacao.className = "resposta";
  msgExplicacao.innerHTML = explic;
  imgResposta.insertAdjacentElement('afterend', msgExplicacao);
}

/*
  //Criar elemento HTML <div class="mensagem" id="mensagem"> nova mensagem aqui </div>
  novaMsg = document.createElement("div"); //Criando novo elemento "div"
  novaMsg.id = "mensagem"; //id = "mensagem"
  novaMsg.className = "mensagem"; //class = "mensagem"
  novaMsg.innerHTML = msg; //Carregar e exibir mensagem
  caixaQuiz.appendChild(novaMsg); //Criar como filha abaixo da div "caixa-quiz"
  caixaOpcoes.insertAdjacentElement('afterend', novaMsg); //Inserindo após elemento "caixa-opcoes" 
*/



/*function exibirResposta(){  
  rsp = document.getElementById("rsp");
  let resp = `
  <div class="caixa-resposta">
  <div>
      <img class="img-resposta" src="/img/img_teste.png">             
  </div>
  <div class="resposta">
      <p>
          Resposta asdasdsad asdasdas
      </p>
  </div>
</div>
  `
  rsp.innerHTML = resp; //Carregar e exibir mensagem
  caixaQuiz.appendChild(rsp); //Criar como filha abaixo da div "caixa-quiz"
  caixaOpcoes.insertAdjacentElement('afterend', rsp); //Inserindo após elemento "caixa-opcoes" 
}*/

// ###################### BOTÃO RESPONDER ######################
//1 - Iniciar quiz sem a imagem, resposta e mensagem de acerto;
//2 - Inserir um contador do numero quiz e do número da pergunta;
//3 - Ao clicar no botão “responder”:
//3.1 - Validar se os botão estão selecionados;
//3.1.1 - Se sim, continuar processo normal;
//3.1.2 - Se não, exibir mensagem para selecionar uma opção pelo menos;
//3.1.3 - Ao selecionar opção, excluir mensagem;
//3.x - Travar os botões de opção para não ser mais clicados;
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
  //Verifica se uma das opções foram selecionadas
  if ((statusOpA == "desmarcado") && (statusOpB == "desmarcado") && (statusOpC == "desmarcado")){ //Se todos botões estiverem com status "desmarcado"
    
    if (caixaQuiz.contains(novaMsg)){ //Se existir mensagem criada:
      while(caixaQuiz.novaMsg){ //Repete...
        caixaQuiz.removeChild(caixaQuiz.novaMsg); //Apaga mensagem
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
    opcaoCorreta();
    exibirResposta(conhecimentosGerais.imgResp, conhecimentosGerais.explicacao);
//3.4 - Precisa armazenar qual opção foi selecionada (a, b ou c);
//3.5 - Verificar se a opção selecionada é igual a opção correta da pergunta;
//3.6 - Se sim, exibir que o usuário acertou a resposta;
//3.7 - Se não, exibir que o usuário errou a resposta;
//3.7.1 - Mudar cor da opção selecionada para vermelha;
//3.7.2 - Mudar cor da opção correta para verde;
//3.7.3 - A opção que sobrar deixa de azul;
//3.8 - Mostrar a imagem e a resposta ao usuário;
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





