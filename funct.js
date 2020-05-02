'use strict'

/*
/*1- Programa una función que cuente el número de caracteres de una cadena de texto, pe.
 miFuncion("Hola Mundo") devolverá 10.
2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados,
 pe. miFuncion("Hola Mundo", 4) devolverá "Hola".

3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, 
pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].
4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) 
devolverá Hola Mundo Hola Mundo Hola Mundo.

*/

const c = console.log

const cadena = (string) =>{
	if (isNaN(string) && string !=="") {
		
		c('La cantidad de caracteres es '+ string.length)
		alert('La cantidad de caracteres es '+ string.length)
	
	}else{
		
		c('No es un string, vuelve a ingresarlo')
		alert('No es un string vuelve a ingresarlo')
	}

}

cadena(prompt('Ingresar un string'))

const cadena1 = (string,num) => {
	
	if (isNaN(string) && string !=="") {
		
		let string1 = string.substring(0,num)
		return c('La palabra recortada queda así:'+ string1)
	
	}else{
		
		c('No es un string, vuelve a ingresarlo')
		alert('No es un string vuelve a ingresarlo')
		string = prompt('Ingresar nuevo string:')
	}
}

cadena1(prompt('Ingresar un string'),parseInt(prompt('Ingresar un numero'),0))

const cadena2 = (string, letra) => {
	if (isNaN(string) && string !==""){
		let string2 = string.split(',')
		return c(string2)

	}else{
		c('No es un string, vuelve a ingresarlo')
		alert('No es un string vuelve a ingresarlo')
		string = prompt('Ingresar nuevo string:')

	}
}
cadena2(prompt('Ingresar un string'))

const cadena3 =(string, num ) =>{
	
	while(num >= 1){
		if (isNaN(string) && string !=='') {
			c(string)
		}else{
			c('No es un string')
		}
		num--
	}	
}


cadena3(prompt('Ingresar un string'),parseInt(prompt('Ingrese un numero',0)))

/*while(cant >= 1){
		if (isNaN(string) && string !=='') {
			console.log(string)
		}
		cant--
	}	*/