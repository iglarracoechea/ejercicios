'use strict'

// programa que pida dos número y que nos diga cual es el mayor el menor y si son iguales;

var num1=parseInt(prompt("Ingrese un numero",0));
var num2=parseInt(prompt("Ingrese otro numero",0));

while(num1==0 || num2==0 || isNaN(num1) || isNaN(num2)){
	var num1=parseInt(prompt("Ingrese un numero",0));
	var num2=parseInt(prompt("Ingrese otro numero",0));
}

if (num1==num2) {
	console.log("Numeros identicos");
}else if(num1>num2){
	console.log(num1+" es mayor a numero 2");
}else{
	console.log(num2+" es mayor a numero 1");
}







