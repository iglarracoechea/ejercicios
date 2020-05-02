'use strict'

// Programa una función que dado un array devuelva 
//el número mas alto y el más bajo de dicho array, pe. miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60].

const array = (numeros)=>{
	
	for (var i=0; i<6; i++){
		numeros[i] = parseInt(prompt("Ingrese 6 numeros",0)) 
	}	


	/*
	let cont = 0,
		elemento = ''
	do{
		elemento = parseInt(prompt('Ingrese 5 numeros'))
		numeros.push(elemento)
		cont++
	}while(cont < 5)
	*/

	numeros.sort((a,b) => b-a);
	
	let mayorMenor = [numeros[0], numeros[5]]
	
	console.log(numeros)
	return console.log(mayorMenor)
	
}

array(new Array())