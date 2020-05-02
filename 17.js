'use strict'
/*
const fecha = (anio='',mes='',dia='')=>{
	
	if(!anio || !mes || !dia) return console.log('Fecha incorrecta')
	if(anio === undefined || mes === undefined || dia === undefined) return console.log('Indefinido')
	if(anio === 0 || mes === 0 || dia === 0) return console.log('Ingrese fecha correcta')
	if(Math.sign(anio) === -1 ||Math.sign(anio) === -1 ||Math.sign(anio) === -1) return console.error('Numero negativo')
	if(typeof anio === 'string' || typeof mes === 'string' || typeof dia ==='string') return console.log('No ingreso fecha correcta')

	let fechaIngresada = new Date (anio,mes,dia);   //new Date().getTime() se lo resto a new Date(1995,4,23).getTime
	let fechaActual =  new Date().getTime() 		//Date.now() menos exacto;
	
	const diferencia = fechaActual - fechaIngresada; //lo devuelve en milisegundos segundos
	
	let milisecons = 31556900000; //segundos que transcurren en un año
 
	const valorFecha = diferencia /milisecons  //da los años

	const year = Math.round(valorFecha)

	return console.log('Tiempo transcurrido: '+ year + ' años')
	
}

fecha(parseInt(prompt('Ingrese un año')),parseInt(prompt('Ingrese un mes(numero)')),parseInt(prompt('Ingrese dia(numero)')))

*/
const calcularYear = (fecha = undefined) =>{
	if(fecha === undefined) return console.log('No ingresaste fecha')
	if(!(fecha instanceof Date)) return console.log('El valor que ingresaste no es una fecha valida') 

	let hoyMenosFecha = new Date().getTime() - fecha.getTime(), //
		yearsEnMs = 1000 * 60 * 60 * 24 * 365  //*10 en decadas,//1000 representa 1 segundo en js. 31556900000
		yearHumanos = Math.round(hoyMenosFecha/yearsEnMs);

	return(Math.sign(yearHumanos) === -1)
		? console.info(`Faltan ${Math.abs(yearHumanos)} años para llegar al ${fecha.getFullYear()}`)
		: (Math.sign(yearHumanos) === 1)
			? console.log(`Han pasado ${yearHumanos} años, desde ${fecha.getFullYear()}`)
			: console.log(`No hay diferencia, estamos en año actual ${fecha.getFullYear()}`)
}

//1000 * 60 * 60 * 24 * 365 *10  en decadas
//1000 * 60 * 60 * 24 en dias
//1000 * 60 * 60 * 24 * 52 en semanas


calcularYear();
calcularYear(false)
calcularYear(new Date(1995,4,9))
calcularYear(new Date(2100,4,9))
calcularYear(new Date(2020,4,29))

//typeof [] devuelve object para fecha
// instanceof Array devuelve array para fechaActual

/*
let date = console.log(new Date(1995,4,23).getTime())
let date2= console.log(new Date().getTime())
*/

//forma más facil
//? console.info(`Faltan ${yearHumanos*-1} años para llegar al ${fecha.getFullYear()}`)

//Math.abs lo convierte a valor absoluto