'use strict'

var num=parseInt(prompt("Ingrese un número",0));
var num2=parseInt(prompt("Ingrese otro número"));
var resultado=0;

while(num<0 || isNaN(num) ||num2<0 ||isNaN(num2)){
	num=parseInt(prompt("Ingrese un número",0));
	num2=parseInt(prompt("Ingrese otro número",0));
}
var suma=num+num2;
var resta=num-num2;
var multi=num*num2;
var division=num/num2;

var resultado="La suma es "+(suma)+" </br>"+
			  "La resta es "+(resta)+" </br>"+
			  "La multiplicación es "+(multi)+" </br>"+
			  "La división es "+(division);

var resultado2="La suma es "+(suma)+"\n"+ // \n salto de linea en la consola y en el alert
			  "La resta es "+(resta)+"\n"+
			  "La multiplicación es "+(multi)+"\n"+
			  "La división es "+(division);

document.write(resultado);
alert(resultado2);
console.log(resultado2);