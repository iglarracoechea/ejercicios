//7
const palindromo = (palabra1="") =>{
	if(!palabra1) console.log('No es un string')
	palabra1 = palabra1.trim().toLowerCase()
	
	let darvuelta = palabra1.split('').reverse().join('')  //no es la palabra original sino transformada
	return (darvuelta === palabra1)			//aca se usa la palabra ingresada
	 		? console.info('ES un palindromo')
	 	 	: console.log('No es un palindromo')
}

palindromo(prompt('Ingrese una palabra'))	