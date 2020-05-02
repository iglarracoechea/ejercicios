'use strict'

//programa que nos diga si un número es par o impar, si no es valido que nos pida de nuevo el número

var num=parseInt(prompt("Ingrese un número:",0));

while(num<0 || isNaN(num)){
	var num=parseInt(prompt("Ingrese otro número:",0));
}

if (num%2==0) {
	console.log("Es par");
}else{
	console.log("Es impar");
}
