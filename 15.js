'use strict'
//Programa una función para convertir números de base binaria a decimal y viceversa, pe. miFuncion(100,2) devolverá 4 base 10.

const decimal = (numero = undefined, base = undefined)=>{
	
	if(numero === undefined) return console.warn('No ingresaste numero a convertir')
	if(base === undefined) return console.warn('No ingresaste base')
	if(Math.sign(numero === -1) || Math.sign(base === -1)) return console.log('Número negativo')
	if(typeof numero !== 'number' || typeof base !== 'number') return console.log('El valor ingresado no es un numero')

	//se puede usar expresion regular: !/(2|10)/.test(unidad)

	if (base === 2){
		return console.info(`${numero} base ${base} = ${parseInt(numero,base)} base 10`)
	}else if(base === 10){
		return console.info(`${numero} base ${base} = ${numero.toString(base)} base 2`) //decimal a binario
	}else{
		return console.error('El tipo de base a convertir no es valido')
	}

}

decimal(parseInt(prompt('Ingrese un numero')),parseInt(prompt('Ingrese la base')))

//to string con paremetro radix, lo convierte a binario`