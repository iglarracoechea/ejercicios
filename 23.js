/*Programa una función que dado un array de números devuelva un objeto 
con 2 arreglos en el primero almacena los números pares 
y en el segundo los impares, pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}.
*/

const numeros = (arreglo= undefined)=>{
	
	if(arreglo === undefined) return console.warn ('No ingreso arreglo')
	if(!(arreglo instanceof Array)) return console.log('El valor expresado no es un array')
	if(arreglo.length === 0) return console.log('El arreglo esta vacio')

	let numerosPares = [],
		numerosImpares = [];


	for(let elementos of arreglo){
		if(typeof elementos !== 'number') return console.log(`El valor ${numero} no es un numero`)
		if(elementos%2===0) numerosPares.push(elementos)
		if(elementos%2===1) numerosImpares.push(elementos)
	}
	

	return console.info({
		Arreglo_Original : arreglo,
		numeros_Pares : numerosPares,
		numeros_Impares : numerosImpares
	})
}


//numeros()
//numeros([1,2,3,4,5,6,7,8,9,0])


//otra forma usano filter

const numeros1 = (arreglo2= undefined)=>{
	
	if(arreglo2 === undefined) return console.warn ('No ingreso arreglo')
	if(!(arreglo2 instanceof Array)) return console.log('El valor expresado no es un array')
	if(arreglo2.length === 0) return console.log('El arreglo esta vacio')


	for(let elementos of arreglo2){
		if(typeof elementos !== 'number') return console.log(`El valor ${numero} no es un numero`)
	}
	
	/*const numerosPares = arreglo2.filter(pares => pares %2 ===0)
	const numerosImpares = arreglo2.filter(impares => impares %2 ===1)

	return console.info({
		Arreglo_Original : arreglo2,
		numeros_Pares : numerosPares,
		numeros_Impares : numerosImpares
	})*/

	return console.info({
		Arreglo_Original : arreglo2,
		Numeros_Pares : arreglo2.filter(pares => pares%2=== 0),
		Numeros_Impares : arreglo2.filter(impares => impares%2===1)
	})
}

numeros([1,2,3,4,5,6,7,8,9,0])

