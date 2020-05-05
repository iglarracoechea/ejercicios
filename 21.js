
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


	let newArray = numeros.map(elemento => elemento * elemento)
	return console.log(newArray)

}

//array()
//arreglos, date, objetos con instanceof
//otra forma de hacerlo

const devolverCuadrados = (arreglo = undefined) => {
	if(arreglo === undefined) return console.warn ('No ingreso arreglo')
	if(!(arreglo instanceof Array)) return console.log('El valor expresado no es un array')
	if(arreglo.length === 0) return console.log('El arreglo esta vacio')
	

	for(let numeros of arreglo){
		if(typeof numeros !== 'number') return console.log(`El valor ${numeros} no es un numero`)
	}

	const newArray = arreglo.map(numero => numero * numero)
	return console.log('Arreglo original: '+ arreglo + '. Arreglo nuevo: ' + newArray)
}

devolverCuadrados()
devolverCuadrados(true)
devolverCuadrados({})
devolverCuadrados([])
devolverCuadrados([1,'3'])
devolverCuadrados([1,3,5])
