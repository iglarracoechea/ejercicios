//18) Programa una función que dada una cadena de texto cuente 
//el número de vocales y consonantes, pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5.

const texto = (cadena='') =>{
	while( !cadena || typeof cadena !== 'string' || cadena === undefined ){
		cadena=prompt('Ingrese una cadena')
	}
	
	cadena.toLowerCase()

	let contVocales = 0,
		contConsonates = 0;
	
	for (let letras of cadena){
		
		if(/[aeioáàéèíìóòúù]/.test(letras)) {
			contVocales++
		}else{
			contConsonates++
		}
		//if(/[aeioáàéèíìóòúù]/.test(letras)) contVocales++  //test verifica que las vocales existan
		//if(/[bcdfghklmnpqrstvwxyz]/.test(letras)) contConsonates++

		/*
		if(letras === 'A' || letras === 'E' || letras === 'I' || letras === 'O' || letras === 'U'){
			contVocales++
		}else{
			contConsonates++
		}
		*/
	}

	return console.log({
		cadena,
		contVocales,
		contConsonates
	})


	/*
	const cantidad = `La cantidad de vocales es de ${contVocales} y la cantidad de consonantes es de ${contConsonates}`
	return console.log(cantidad)*/
}

texto(prompt('Ingrese una cadena'))

/*
const texto = (cadena='') =>{
	while( !cadena || typeof cadena !== 'string' || cadena === undefined ){
		cadena=prompt('Ingrese una cadena')
	}
	let cadena1 = cadena.toUpperCase().trim()

	let contVocales = 0
	let contConsonates = 0
	cadena1.split('').forEach((letras,index)=>{
		if(letras === 'A' || letras === 'E' || letras === 'I' || letras === 'O' || letras === 'U'){
			contVocales += 1
		}else{
			contConsonates +=1
		}
	})

	const cantidad = `La cantidad de vocales es de ${contVocales} y la cantidad de consonantes es de ${contConsonates}`

	return console.log(cantidad)
}

texto(prompt('Ingrese una cadena'))
*/