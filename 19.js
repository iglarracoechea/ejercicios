//19) Programa una función que valide 
//que un texto sea un nombre válido, pe. miFuncion("Jonathan MirCha") devolverá verdadero.

'use strict'

const validarNombre = (nombre='') =>{
	if(!nombre)return console.log('No ingreso nombre')
	if(!isNaN(nombre)) return console.log('No ingreso una cadena de texo')

	let expReg = /^[A-Za-zÑñÁáéÉÍíÓóúüÜ\s]+$/g.test(nombre) //g(lo busca en todos los caracteres)
	// \s acepta espacios en blanco //^ no puede haber nada antes de la expresión. $ no puede haber nada despues
	//.test verifica que exista la expresion dentro de la cadena.
	//+ para que lo evalue por cada caracter que tiene la cadena de texto
	//A-Za   de la (a) a la (z) mayuscula 

	return(expReg)
		? console.info(`${nombre} es valido`)
		: console.log (`${nombre} no es valido`);


}

validarNombre(prompt('Ingrese un nombre'),0)