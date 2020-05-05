'use strict'

// Programa una función que dado un array devuelva 
//el número mas alto y el más bajo de dicho array, pe. miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60].

const array = (numeros)=>{
	if(!(numero instanceof Array)) return console.log('El valor expresado no es un array')
	
	for (let i=0; i<6; i++){
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
//array(new Array())

const devolver2mayores = (arreglo = undefined) => {
	if(arreglo === undefined) return console.warn ('No ingreso arreglo')
	if(!(arreglo instanceof Array)) return console.log('El valor expresado no es un array')
	if(arreglo.length === 0) return console.log('El arreglo esta vacio')
	

	for(let numero of arreglo){
		if(typeof numero !== 'number') return console.log(`El valor ${numero} no es un numero`)
	}
	


	/*
	arreglo.sort((a,b) => b-a);  //ordena mayor a menor
	const mayorMenor = [arreglo[0],arreglo[5]]*/

	
	return console.info(`Arreglo original: ${arreglo}\nValor mayor: ${Math.max(...arreglo)},\nValor menor:${Math.min(...arreglo)}`);

}

devolver2mayores([30,454,3123,543,32,12])
