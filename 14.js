'use strict'
/*
const convertirGrados = (c ='', f = '') =>{
	//if(!c) console.warn('No ingreso grados celcius')
	//if(!f) console.warn('No ingreso grados fahrenheit')
	if(isNaN(c) || isNaN(f)) console.error('Ingrese un string')

	let cToF = c
	const celcius = 'celcius'
	let conversionAFahrenheit = (cToF*9/5) + 32

	let fToC = f
	const fahrenheit = 'fahrenheit'
	let conversionACelcius = (fToC-32)* 5/9   

	
	const resultado = ( cToF !== '' &&  fToC === '')
						? console.info('La conversion de Cº a Fº es igual a '+ conversionAFahrenheit +' grados '+ fahrenheit )
						: ( cToF === '' && fToC !== '')
							? console.info('La conversion de Fº a Cº es igual a '+ conversionACelcius + ' grados '+ celcius)
							: console.error('No se pueden ingresar dos datos')

	return resultado	
}
*/
 



const convertirGrados1 = (grados = undefined, unidad = undefined) =>{
	if(grados === undefined) return console.warn('No ingresaste grados a convertir')
	if(typeof grados !=="number") return console.log('No ingreso grado correcto')
	if(unidad === undefined) return console.warn('No ingresaste el tipo de unidad')
	if (typeof unidad !== 'string') return console.warn('No ingresaste unidad/cadena de texto');
	if(unidad.length !== 1 || !/(C|F)/.test(unidad)) return console.warn('Incorrecto, ingrese C o F') 
								//verifica que ingrese la c o f mayuscula
	
	let conversionACelcius =(grados-32)* 5/9
	let conversionAFahrenheit = (grados*9/5) + 32

	switch(unidad.toUpperCase()/*.trim()*/){  
		case 'C':
			return console.log('La conversión a celcius es igual a '+ conversionACelcius +' grados celcius');
		break;
		case 'F':
			return console.log('La conversión a fahrenheit es igual a '+ conversionAFahrenheit + ' grados fahrenheit')
		break;
		default:

		break;
	}



	/*
	if(unidad === 'C'){ 
		return console.log(conversionACelcius)
	}else if(unidad1 === 'F'){
		return console.log(conversionAFahrenheit)
	}
	*/
}

convertirGrados1(parseInt(prompt('Ingrese cantidad de grados')), prompt('Ingrese C para convertir a celcius o F para convertir a fahrenheit'))
