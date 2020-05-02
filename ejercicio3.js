'use strict'

var num1=parseInt(prompt("Ingrese un número",0));
var num2=parseInt(prompt("Ingrese otro número",0));
let cont=0

for(let i=num1+1;i<=num2;i++){
		console.log(i)
		cont++
}

console.log('El contador es '+cont)