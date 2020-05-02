//6)
/*const strings = (string1, palabra) => {
	let cont = 0									
	let buscarPalabra = palabra.trim().toLowerCase()
	if(isNaN(string1)){						
		
		let string2 = string1.split(' ')
		string2.forEach(elemento =>{
			if(buscarPalabra === elemento){
				cont += 1
			}
		})
		return console.log('La palabra buscada es '+buscarPalabra+' y se repite ' + cont + ' veces')
	}	
}

strings(prompt('Ingrese un string:'),prompt('Ingrese una palabra'))*/

const textoEnCadena = (cadena ="", palabra = "") =>{
		if(!cadena)return console.warn('No ingresaste texto largo')
 		if(!palabra)return console.warn('No ingresaste palabra')
 		let i = 0;
 		let contador = 0;
 		while(i !== -1){  //cuando indexOf no encuentra la palabra devuelve un -1
 			i=cadena.indexOf(palabra,i);
 			if(i !== -1){
 				i++;
 				contador++;
 			}
 		} 
 	return console.info('La palabra se repite '+contador+ ' veces')
}

textoEnCadena(prompt('Ingrese un string:'),prompt('Ingrese una palabra'))


let string = 'Hola como como como estasl'

console.log(string.indexOf('l',2))
/*
var str = "Hello world, welcome to the universe."; 
var n = str.indexOf("e",2); //busca la e a partir de la posición 2
console.log(n)*/