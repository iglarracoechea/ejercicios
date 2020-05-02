//12) Programa una función que determine si un número es primo 
//(aquel que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true.

const esPrimo = (numero='')=>{
	//validación  //si el numero esta vacio
	if(!numero) return console.warn('Numero incorrecto');  //empty string devuelve true
	if(numero === 0) return console.log('Ingrese un numero mayor a 0')
	if(numero === undefined) return console.warn('Numero undefined')
	if(typeof numero!=="number") return console.log('Ingrese un numero')
	if (Math.sign(numero) === -1) return console.warn('Numero negativo')

	let validar = false
	for(let i=2; i<numero; i++){
		if(numero%2===0){
			validar = true
			break;
		}
	}
	return (validar)
	 ? console.log('No es primo');
	 : console.log('Es primo')
}

esPrimo(parseInt(prompt('Ingrese un numero')))



/*
const primo = (numero='') =>{
	if(!numero) return console.warn('Numero incorrecto');
	if(numero === 0) return console.log('Ingrese un numero mayor a 0')
	if(numero === undefined) return console.warn('Numero undefined')
	if(typeof numero!=="number") return console.log('Ingrese un numero')
	if (Math.sign(numero) === -1) return console.warn('Numero negativo')
	if (numero===1) return console.error('Es divisible solo por un numero, no es primo')

	let cont = 0
	let contprimo = 0

	for(let i=1; i<=numero;i++){
		if(numero%2===0){
			cont++;
		}else{
			contprimo++;
		}
		
		if(cont>2){
			console.log('No es primo')
		}
		if(contprimo===2){
			console.log('Es primo')
		}
	}
}

primo(parseInt(prompt('Ingrese un numero')))*/


/*const esPrimo = (numero='')=>{
	//validación  //si el numero esta vacio
	if(!numero) return console.warn('Numero incorrecto');  //empty string devuelve true
	if(numero === 0) return console.log('Ingrese un numero mayor a 0')
	if(numero === undefined) return console.warn('Numero undefined')
	if(typeof numero!=="number") return console.log('Ingrese un numero')
	if (Math.sign(numero) === -1) return console.warn('Numero negativo')

	let validar = 'true'
	for(let i=2; i<numero; i++){
		if(numero%2===0){
			validar ='false'
			return console.log('No es primo')
		}
	}
	if(validar==='true'){
		return console.log(`El numero ingresado es primo`)
	}
}

esPrimo(parseInt(prompt('Ingrese un numero')))
*/