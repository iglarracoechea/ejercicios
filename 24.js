//24) Programa una función que dado un arreglo de números devuelva un objeto con dos arreglos, el primero tendrá 
//los numeros ordenados en forma ascendente y el segundo de forma descendiente, 
//pe. miFuncion([7, 5,7,8,6]) devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }.

/*const ordenar = (numeros=undefined)=>{
	if(numeros === undefined) return console.warn ('No ingreso arreglo')
	if(!(numeros instanceof Array)) return console.log('El valor expresado no es un array')
	if(numeros.length === 0) return console.log('El arreglo esta vacio')

	for(let elementos of numeros){
		if(typeof elementos !== 'number') return console.log(`El valor ${numero} no es un numero`)
	}
	
	let ascendente = numeros.map(elemento => elemento).sort() //forma ascendente
	let descendente = numeros.map(elemento => elemento).sort().reverse() //forma descendente

	console.info({
			Arreglo_Ascendente: ascendente,
			Arreglo_Descendente : descendente
	})
}

ordenar([7,5,7,8,6,8,23,15])*/

let numeros = '45678'

numeros.split('')

console.log(numeros)

