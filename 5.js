'use strict'

//5)
const cadena = (string) =>{
	let cadena1 = string.split("").reverse().join('')
	console.log(cadena1)
}

cadena(prompt('Ingrese un string'))
/*
//6)
const strings = (string1, palabra) => {
	let cont = 0									
	let buscarPalabra = palabra
	if(isNaN(string1)){						
		
		let string2 = string1.split(' ')
		string2.forEach(elemento =>{
			if(buscarPalabra === elemento){
				cont += 1
			}
		})
		return console.log('La palabra buscada es '+buscarPalabra+' y se repitio ' + cont + ' veces')
	}	
}

strings(prompt('Ingrese un string:'),prompt('Ingrese una palabra'))


//7
const palindromo = (palabra1="") =>{
	if(!palabra1) console.log('No es un string')

	let darvuelta = palabra1.split('').reverse().join('')  //no es la palabra orinal sino transformada
	return (darvuelta === palabra1)			//aca se usa la palabra ingresada
	 		? console.info('ES un palindromo')
	 	 	: console.log('No es un palindromo')
}

palindromo(prompt('Ingrese una palabra'))

//8
const eliminarpatron = (patron , palabra2)=>{
		let patron2 = patron.split('')
		patron2.splice(0,3,palabra2)
		let patron3=patron2.join('')
		return console.log(patron3)
}

eliminarpatron(prompt('Ingrese patron:'),' ')


//validaciones

// if(!cadena)return console.warn('No ingresaste texto largo')
 //if(!texto)return console.warn('No palabra texto largo')*/