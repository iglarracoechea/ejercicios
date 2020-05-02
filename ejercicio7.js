'use strict'

//tabla de multiplicar de un número introducido por pantalla;

let num=parseInt(prompt("Ingrese un número",0));
while(num<0 || isNaN(num)){
	num=parseInt(prompt("Ingrese un número",0));
}

for(let i=1;i<=num;i++){
	console.log('La tabla de multiplicar es '+i*num)
}