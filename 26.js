// Programa una función que dado un 
//arreglo de números obtenga el promedio, pe. promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5.

/*const promedio = (numeros = undefined) =>{
	if(numeros === undefined) return console.warn('Error. Número no definido')
	if(!(numeros instanceof Array)) return console.warn('No es un array')
	if(numeros.length === 0) return console.warn('Array vacio')

	let cont = 0
	let suma = 0
	for(let elementos of numeros){
		if(typeof elementos !== 'number') return console.log(`El valor ${numeros} no es un numero`)
		cont++
		suma = suma + elementos
	}

	return console.info(`El promedio es ${suma/cont}`)
} 

promedio([9,8,7,6,5,4,3,2,1,0])
promedio([8,5,4,3,2,1])*/

const promedio = (numeros = undefined) =>{
	if(numeros === undefined) return console.warn('Error. Número no definido')
	if(!(numeros instanceof Array)) return console.warn('No es un array')
	if(numeros.length === 0) return console.warn('Array vacio')

	let cont = 0
	for(let elementos of numeros){
		if(typeof elementos !== 'number') return console.log(`El valor ${numeros} no es un numero`)
		//cont++;
	}

	let suma = numeros.reduce((a,b)=> a + b)
	

	return console.info(`El promedio es ${suma/numeros.length}`)
} 

promedio([9,8,7,6,5,4,3,2,1,0])
promedio([8,5,4,3,2,1])
promedio([10,10,10,8])