//1 - Quando selecionar uma opção, dar uma descrição de “marcado” 
//2 - Ajustar para a cor de verde
//3 - Marcar as outras opções com a cor azul



document.querySelectorAll('.op').forEach(function(opcoes){
    opcoes.addEventListener('onclick', function(){
        var idBotao = this.id;

        switch(idBotao){
            case 'op-a':
                console("Teste A");
            break;
            case 'op-b':
                console("Teste B");
            break;
            default:
                console("outro");
        }
    })
})



/*function opcoes(){
    idBotao = this.id;
    op = document.querySelector(".op");
    //opA = document.getElementById("op-a");     
    switch(idBotao){
        case 'op-a':
            console.log("Opcao A");
        break;
        default:
            console.log("outro");
    }



    //var item = document.getElementById(id); //Capturando o campo de índice da tarefa
    //var classe = item.getAttribute('class'); //Capturando o atributo "class", que é o nome da classe
   
    /*if (op.classList && opA){
        console.log(" teste A " + opA.id);
    }else if (op.classList && opB){
        console.log(" teste B" + opB.id);
    }else{
        console.log(" outro ");
    }*/

 //}