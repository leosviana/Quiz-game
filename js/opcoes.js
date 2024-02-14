//1 - Quando selecionar uma opção, dar uma descrição de “marcado” 
//2 - Ajustar para a cor de verde
//3 - Marcar as outras opções com a cor azul

function opcoes(){
    op = document.getElementsByClassName("op");
    //opA = op.getAttibute("id");
    opA = document.getElementById("op-a"); 
    
    //var item = document.getElementById(id); //Capturando o campo de índice da tarefa
    //var classe = item.getAttribute('class'); //Capturando o atributo "class", que é o nome da classe
    //opB = document.getElementById("op-b").className;
    //opC = document.getElementById("op-c").className;
    if (op.id == "op-a" ){
        console.log(op.id + "teste A" + opA);
        document.getElementById("text").innerHTML = op;
        document.getElementById("text2").innerHTML = opA;

    }else{
        console.log("teste B");
        console.log(op.id + "teste B" + opA.id);
    }

}