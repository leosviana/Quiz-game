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

//OBJETO COMUM PERGUNTA TESTE
/*const conhecimentosGerais = { //Criando objeto Quiz - Pergunta 1
    numQuiz: 1,
    numPergunta: 1,
    pergunta: "Qual é tarara...", //Pergunta
    opa: "Opção A",               //Opção A
    opb: "Opção B",               //Opção B
    opc: "Opção C",               //Opção C
    opcorreta: "Opção A",         //Opção Correta
    imgResp: "/img/img_teste.png",
    explicacao: "Piririri...",      //Resposta
}*/

//ARRAY DE OBJETO PERGUNTA TESTE
const conhecimentosGerais = [
  {
    numQuiz: 1,
    numPergunta: 1,
    pergunta: "Qual o plural da palavra 'estrela-do-mar'?",
    opa: "Estrelas-dos-mares",
    opb: "Estrela-dos-mares",
    opc: "Estrelas-do-mar",
    opcorreta: "Estrelas-do-mar",
    imgResp: "/img/Pergunta_1.png",
    explicacao: "O plural de 'estrela-do-mar' é 'estrelas-do-mar'. Palavras unidas por preposição, apenas o primeiro elemento passa para o plural.",
  },
  {
    numQuiz: 1,
    numPergunta: 2,
    pergunta: "Quantos anos há em três séculos e meio?",
    opa: "35 anos",
    opb: "350 anos",
    opc: "3.500 anos",
    opcorreta: "350 anos",
    imgResp: "/img/Pergunta_2.png",
    explicacao: "1 século é 100 anos, meio século é 50 anos, portanto, 3 séculos e meio são, 350 anos.",
  },
  {
    numQuiz: 1,
    numPergunta: 3,
    pergunta: "Onde está localizado o telescópio mais poderoso do planeta?",
    opa: "La Palma, Espanha",
    opb: "Mauna Kea, EUA",
    opc: "Atacama, Chile",
    opcorreta: "Atacama, Chile",
    imgResp: "/img/Pergunta_3.png",
    explicacao: "Considerado o observatório mais poderoso do planeta, o 'Atacama Large Millimeter Array' (ALMA) foi instalado em 2013, para astrônomos observarem e estudarem as primeiras estrelas e galáxias que emergiram das 'idades das trevas' cósmicas há cerca de 13 bilhões de anos.",
  },
  {
    numQuiz: 1,
    numPergunta: 4,
    pergunta: "Astrofobia é o medo de?",
    opa: "Furacão",
    opb: "Terremotos",
    opc: "Relâmpagos e trovões",
    opcorreta: "Relâmpagos e trovões",
    imgResp: "/img/Pergunta_4.png",
    explicacao: "A astrofobia é o medo irracional, fóbico, de ver relâmpagos ou ouvir trovões que, segundo pesquisas recentes da Organização Mundial de Saúde (OMS), afeta, aproximadamente, 5% da população mundial.",
  },
  {
    numQuiz: 1,
    numPergunta: 5,
    pergunta: "Qual é o número que está faltando na sequência: 32, 27, 22 e ___?",
    opa: "15",
    opb: "16",
    opc: "17",
    opcorreta: "17",
    imgResp: "/img/Pergunta_5.png",
    explicacao: "Está retirando de 5 em 5 números. A sequência é 32, 27, 22 e 17.",
  },
  {
    numQuiz: 1,
    numPergunta: 6,
    pergunta: "Quem nasce no estado do Rio de Janeiro é chamado de?",
    opa: "Fluminense",
    opb: "Carioca",
    opc: "Capixaba",
    opcorreta: "Fluminense",
    imgResp: "/img/Pergunta_6.png",
    explicacao: "Quem nasce na cidade do Rio de Janeiro é chamado de 'carioca', e quem nasce no estado, incluindo a capital, atende pelo gentílico de 'fluminense'.",
  },
  {
    numQuiz: 1,
    numPergunta: 7,
    pergunta: "5 hectômetros(hm) equivale a quantos metros?",
    opa: "500 metros",
    opb: "5.000 metros",
    opc: "50.000 metros",
    opcorreta: "500 metros",
    imgResp: "/img/Pergunta_7.png",
    explicacao: "Em 1 hm, temos 100 metros(m), então, em 5 hm, vamos ter 5 x 100, ou seja, 500 metros(m).",
  },
  {
    numQuiz: 1,
    numPergunta: 8,
    pergunta: "Do inglês, o que a palavra 'hazard' significa em português?",
    opa: "O perigo",
    opb: "O Azar",
    opc: "O Incomodo",
    opcorreta: "O perigo",
    imgResp: "/img/Pergunta_8.png",
    explicacao: "A palavra 'hazard' em inglês, significa 'O perigo', 'arriscar' em português.",
  },
  {
    numQuiz: 1,
    numPergunta: 9,
    pergunta: "Qual é o aumentativo de 'copo'?",
    opa: "Copinho",
    opb: "Copázio",
    opc: "Copão",
    opcorreta: "Copázio",
    imgResp: "/img/Pergunta_9.png",
    explicacao: "O aumentativo de 'copo' é 'copaço', 'copázio' ou 'coparrão'.",
  },
  {
    numQuiz: 1,
    numPergunta: 10,
    pergunta: "Qual a raça de cão mais forte do mundo?",
    opa: "Pitbull",
    opb: "Kangal",
    opc: "Rottweiler",
    opcorreta: "Kangal",
    imgResp: "/img/Pergunta_10.png",
    explicacao: "O Kangal é gigante, pode atingir 81 cm de altura e pesar entre 50 e 60 kg. Ele é agressivo com outros cães, mas bastante carinhoso com os tutores, considerado patrimônio cultural na Turquia. É o cachorro que possui a mordida mais forte, ele possui o recorde de 743 PSI.",
  }
]

// ###################### VARIAVEIS GLOBAIS DO PROJETO ######################
//QUIZ
var caixaQuiz = document.getElementById("caixa-quiz");
var idQuiz = document.getElementById("id-quiz");
idQuiz.innerHTML = "QUIZ " + conhecimentosGerais[0].numQuiz; //Número do quiz

//PERGUNTA
var caixaPergunta = document.getElementById("caixa-pergunta");
var idPergunta = document.getElementById("id-pergunta").innerHTML = conhecimentosGerais[0].numPergunta; //Número da pergunta
var pergunta = document.getElementById("pergunta").innerHTML = conhecimentosGerais[0].pergunta; //Descrição da pergunta
var contPergunta = 0; //Contador de perguntas

//OPÇÕES
var statusOpA = "desmarcado"; //Iniciar status das opções como desmarcada
var statusOpB = "desmarcado"; // --
var statusOpC = "desmarcado"; // --
var caixaOpcoes = document.getElementById("caixa-opcoes");
var opA = document.getElementById("op-a"); //Declarando elemento HTML no JS -> opção A
opA.innerHTML = conhecimentosGerais[0].opa;   //Conteudo do objeto da opção A
var opB = document.getElementById("op-b"); //Declarando elemento HTML no JS -> Opção B
opB.innerHTML = conhecimentosGerais[0].opb;   //Conteudo do objeto da opção B
var opC = document.getElementById("op-c"); //Declarando elemento HTML no JS -> Opção C
opC.innerHTML = conhecimentosGerais[0].opc;   //Conteudo do objeto da opção C
var opCorreta = conhecimentosGerais[0].opcorreta; //Conteudo do objeto da opção Correta

//MENSAGEM
var novaMsg; //Declarando variável de nova mensagem;

//BOTÕES
var caixaBotao = document.getElementById("caixa-botao");
var responder = document.getElementById("responder"); //Declarando botão responder do HTML
var proximo = document.getElementById("proximo"); //Declarando botão proximo do HTML
proximo.style.display = "none"; //Iniciar escondendo o botao proximo

//PONTUACAÇÃO
var pontuacao = 0;

// ###################### BOTÃO DE OPÇÕES ######################
//1 - Quando selecionar uma opção, dar um status de “marcado”;
//2 - Ajustar para a cor de verde;
//3 - Marcar as outras opções com a cor azul;

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
        console.log("a) " + statusOpA + " | b) " + statusOpB + " | c) " + statusOpC);
        break;
      case 'op-b': //Caso clique no botão da opção B
        opA.style.backgroundColor = "blue";
        opB.style.backgroundColor = "green";
        opC.style.backgroundColor = "blue";
        statusOpA = "desmarcado";
        statusOpB = "marcado";
        statusOpC = "desmarcado";
        console.log("a) " + statusOpA + " | b) " + statusOpB + " | c) " + statusOpC);
        break;
      case 'op-c': //Caso clique no botão da opção C
        opA.style.backgroundColor = "blue";
        opB.style.backgroundColor = "blue";
        opC.style.backgroundColor = "green";
        statusOpA = "desmarcado";
        statusOpB = "desmarcado";
        statusOpC = "marcado";
        console.log("a) " + statusOpA + " | b) " + statusOpB + " | c) " + statusOpC);
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
//1 - Iniciar quiz sem a imagem, resposta e mensagem de acerto;
//2 - Inserir um contador do numero quiz e do número da pergunta;
//3 - Ao clicar no botão “responder”:
//  3.1 Validar se os botão estão selecionados;
//    3.1.1 - Se sim, continuar processo normal;
//    3.1.2 - Se não, exibir mensagem para selecionar uma opção pelo menos;
//    3.1.3 - Ao selecionar opção, excluir mensagem;
//3.2 - Travar os botões de opção para não ser mais clicados;
//3.3 - Esconder o botão Responder”;
//3.4 - Mostrar o botão “Próximo” (Próxima pergunta);
//3.5 - Precisa armazenar qual opção foi selecionada (a, b ou c);
//3.6 - Verificar se a opção selecionada é igual a opção correta da pergunta;
//  3.6.1 - Se sim, exibir que o usuário acertou a resposta;
//  3.6.2 - Se não, exibir que o usuário errou a resposta;
//  3.6.3 - Mudar cor da opção selecionada para vermelha;
//  3.6.4 - Mudar cor da opção correta para verde;
//  3.6.5 - A opção que sobrar deixa de azul;
//3.7 - Mostrar a imagem e a explicação ao usuário;

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
    opA.disabled = true; //Desabilitar botão "Opção A"
    opB.disabled = true; //Desabilitar botão "Opção B"
    opC.disabled = true; //Desabilitar botão "Opção C"
    opcaoCorreta(); //Verificar se a resposta está correta
    exibirResposta(conhecimentosGerais[contPergunta].imgResp, conhecimentosGerais[contPergunta].explicacao); //Exibir imagem e explicação da resposta

    //console.log("ID QUIZ: " + conhecimentosGerais[0].numQuiz);
    //console.log("ID PERGUNTA: " + conhecimentosGerais[0].numPergunta);
    //++conhecimentosGerais[0].numPergunta;
  }
}

function novaMensagem(msg){ //Criar nova mensagem
  //Criar elemento HTML <div class="mensagem" id="mensagem"> nova mensagem aqui </div>
  novaMsg = document.createElement("div"); //Criando novo elemento "div"
  novaMsg.id = "mensagem"; //id = "mensagem"
  novaMsg.className = "mensagem"; //class = "mensagem"
  novaMsg.innerHTML = msg; //Carregar e exibir mensagem
  caixaQuiz.appendChild(novaMsg); //Criar como filha abaixo da div "caixa-quiz"
  caixaOpcoes.insertAdjacentElement('beforeend', novaMsg); //Inserindo elemento dentro da div "caixa-opcoes" mas ao final
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
      pontuacao++;
      console.log(pontuacao + " pontos!");
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
//OK 1 - Iniciar contador do numero quiz igual ao que está;
//OK 2 - Adicionar +1 ao contador do número da pergunta;
//3 - Ocultar o botão “proximo”;
//4 - Mostrar o botão “responder”;
//OK 5 - Excluir resposta;
//6 - Limpar descrição dos botões;
//7 - Exibir descrição da proxima pergunta;
//7 - Limpar status das opções selecionadas (a, b ou c);
//8 - Se clicar no botão "responder", faz todo processo do botão "responder" novamente

function btProximo(){ 
  contPergunta++;  

  if (contPergunta > conhecimentosGerais.length -1){
    pontuacaoGeral();
    resetarPerguntas();
  }else{  
  idPergunta = document.getElementById("id-pergunta").innerHTML = conhecimentosGerais[contPergunta].numPergunta; //Número da pergunta 
  pergunta = document.getElementById("pergunta").innerHTML = conhecimentosGerais[contPergunta].pergunta; //Descrição da pergunta
  opA.innerHTML = conhecimentosGerais[contPergunta].opa; //Conteudo do objeto da opção A
  opB.innerHTML = conhecimentosGerais[contPergunta].opb; //Conteudo do objeto da opção B
  opC.innerHTML = conhecimentosGerais[contPergunta].opc; //Conteudo do objeto da opção C
  //Opção correta da proxima pergunta
  opCorreta = conhecimentosGerais[contPergunta].opcorreta; //Conteudo do objeto da opção Correta
  //Habilitando as opções novamente
  opA.disabled = false; //Habilitar botão "Opção A"
  opB.disabled = false; //Habilitar botão "Opção B"
  opC.disabled = false; //Habilitar botão "Opção C"
  //Alterando status das opção para "desmarcado"
  statusOpA = "desmarcado";
  statusOpB = "desmarcado";
  statusOpC = "desmarcado";
  //Mudando a cor para azul novamente
  opA.style.backgroundColor = "blue";
  opB.style.backgroundColor = "blue";
  opC.style.backgroundColor = "blue";
  //Excluindo mensagem
  caixaOpcoes.removeChild(novaMsg);
  //Excluindo resposta
  caixaQuiz.removeChild(caixaResposta);
  //Ocultar botão "Proximo"
  proximo.style.display = "none";
  //Exibir botão "Responder"
  responder.style.display = "block";  

  console.log("ID QUIZ: " + conhecimentosGerais[0].numQuiz);
  console.log("ID PERGUNTA: " + conhecimentosGerais[contPergunta].numPergunta);
  }

}

function pontuacaoGeral(){
  //Remover elementos da tela
  caixaOpcoes.removeChild(novaMsg);
  caixaQuiz.removeChild(caixaPergunta);
  caixaQuiz.removeChild(caixaOpcoes);
  caixaQuiz.removeChild(caixaResposta);
  //Criando elemento de pontuação na tela
  divPontuacao = document.createElement("div");
  divPontuacao.id = "pontuacao";
  divPontuacao.className = "pontuacao";
  caixaQuiz.appendChild(divPontuacao);
  divPontuacao.insertAdjacentElement('afterend', caixaBotao);
  divPontuacao.innerHTML = "PARABÉNS!!<br>" +
                           "Você acertou " + pontuacao + " perguntas.";
  console.log("PARABÉNS!! Você acertou " + pontuacao + " perguntas.");
}

function btResetar(){
  contPergunta = -1;
  btProximo();
}

function resetarPerguntas(){
  botaoResetar = document.createElement("div");
  botaoResetar.id = "botao-resetar";
  botaoResetar.className = "botao-resetar";
  botaoResetar.onclick = btResetar();
  caixaBotao.appendChild(botaoResetar);
  caixaBotao.insertAdjacentElement('beforeend', botaoResetar);
}