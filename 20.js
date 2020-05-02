//20) Programa una función que valide 
//que un texto sea un email válido, pe. miFuncion("jonmircha@gmail.com") devolverá verdadero.

'use strict'

const validarEmail = (email='') =>{
	if(!email)return console.log('No ingreso nombre')
	if(!isNaN(email)) return console.log('No ingreso una cadena de texo')

	let expReg =/[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i.test(email) 
	//funciona para casi todo
	// \s acepta espacios en blanco //^ no puede haber nada antes de la expresión. $ no puede haber nada despues
	//.test verifica que exista la expresion dentro de la cadena.
	//+ para que lo evalue por cada caracter que tiene la cadena de texto
	//A-Za   de la (a) a la (z) mayuscula (todo el alfabeto)

	return(expReg)
		? console.info(`${email} es un email valido`)
		: console.log (`${email} no es email valido`);


}
validarEmail(prompt('Ingrese un Email'),0)