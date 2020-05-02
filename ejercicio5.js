'use strict'
//Muestre todos los divisiores de un numero introducido por pantalla

var num1=parseInt(prompt("Ingrese un número",0));
var num2=parseInt(prompt("Ingrese un segundo numero",0));


for(var i=1; i<=num1; i++){
	if (num1%i==0) {
		console.log(i);	
	}
}

var cont=1

while(cont<=num2){
	if (num2%cont==0) {
		console.log(cont);
	}
	cont++;
}




