'use strict'

const texto = (string='')=>{
	if(!string) return console.log('No hay string')
	if(string === undefined) return console.log('No asigno valor')
	if(!(isNaN(string))) return console.log('No ingreso un numero')

	
	let array= string.split(' ')
	let stringArray = array.map(elemento=> elemento.length)
	let stringSuma = stringArray.reduce((a,b)=> a+b)
	
	if((stringSuma/array.length) > 5) return console.log('El promedio es superior a 5 letras')
	

	/*
	const arr = string.split(' ');
	const total = arr.reduce((acc, val) => acc + val.length,0)
	return console.log(total / arr.length)*/
	
	
	let stringArray = string.split(' ').map(longitud => longitud.length)
	let promedioArray = stringArray.reduce((a,b)=> a + b) / stringArray.length
	
	if(promedioArray > 5) return console.log('El promedio es superior a 5 letras')
	
	

}

texto(prompt('Ingresa un texto:'))