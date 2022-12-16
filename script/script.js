var num2, op, result=0;
var continua = true, valido=true;
var continuar = 'y';

result = prompt('insira o numero');

while(isNaN(result)){
    result = prompt("Não foi informado um numero. Insira o numero novamente:");
}

do{
    op = prompt('insira op');
    if (op !== "="){
        num2 = prompt('insira numero2');
    }
	try{
	  switch(op){
    		case "/":
    		    if (num2 === "0") { 
    		        throw "Divisão por zero";
    		    }else{
    		        result = result/num2;
    		    }
    		    break;
		    case "+":
			    result = result+num2; 
      		    break;
    		case "-":
			    result = result-num2; 
      		    break;
    		case "*":
  			    result = result*num2;
      		    break;   
    		case "=":
		        continua = false;
 			  break;
 			default:
 			    throw "Operação inválida!";
  	  }
 	}catch (e){
      	alert("Erro:"+e+". Tente novamente!");
        result = 0;
        continuar = prompt("Deseja continuar? y/n");
	    (continuar === 'n')? continua = false: result = prompt('insira primeiro numero:');
     }
}while(continua);

if(result!==0){
    alert(result);  
}