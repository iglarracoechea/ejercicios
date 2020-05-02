'use strict'
//rograma una función que dado un array numérico devuelve otro array 
//con los números elevados al cuadrado, pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25].


const array = (numeros=[])=>{
	let cont = 0
	let elemento = ''
	
	do{
		elemento = parseInt(prompt('Ingrese 6 numeros'),0)
		numeros.push(elemento)
		cont++
	}while(cont < 6)


	let newArray = numeros.map((elemento) => elemento*elemento)
	return console.log(newArray)

}

array()