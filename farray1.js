'use strict'

/*1-pida seis numeros por pantalla y lo meta en un array
  2-tiene que mostrar todos sus elementos(array entero), en el cuerpo de la página y en la consola
  3-tenenmos que ordenarlo y mostrarlo
  4-invertir su orden y mostrarlo
  5-mostrar cuantos elementos tiene el array
  6-hacer una busqueda de un valor introducido por el usuario,que nos diga si esta en el array y su indice
 */

const numeros=(numero, ingresar)=>{
	
	numero = []
	let elemento = '',
		 cont = -1;
	
	do{
		elemento = parseInt(prompt('Ingrese 6 numeros'),0)
		numero.push(elemento)
		cont++
	}while(cont < 6)
	
	/*numero = new Array(6);
	for (var i=0; i<6; i++){
		numero[i] = parseInt(prompt("Ingrese 6 numeros",0)) 
	}	
	*/
	
	numero.pop() //quita el ultimo elemento
	
	numero.sort((a,b) => a-b );  
	//ordena numericamentede menor a mayor.los compara y los resta. Si es positivo a es mayor, si es negativo b es mayor
	
	//numero.reverse();	

	ingresar=parseInt(prompt('Ingrese busqueda',0))
	//let contIndex = 0
	numero.forEach((elemento,index)=>{ 
		document.write("<li>"+"Posición "+index+"= "+elemento+"</li>");
		console.log("Elemento: "+elemento+",  Posición: "+index);
		if(elemento === ingresar){
			document.write('El elemento '+ elemento + ' existe, esta en la posición '+ index +'</br>')
			alert('El elemento buscado existe esta en la posición '+ index)
		}
		
	});

	document.write("Numeros ordenados  : "+numero);
	console.log(numero);
	console.log(`Cantidad de elementos: ${cont} `)
}

numeros()






/*
array.forEach((elemento,index)=>{ 
		document.write("<li>"+"Posición "+index+"= "+elemento+"</li>");
		console.log(elemento, index)
});*/

/*let ordenar=array.sort();
	let invertir=ordenar.reverse();
	console.log(invertir);
	document.write(invertir);
*/
/*
for(var i=0; i<numeros.length;i++){
	document.write("<li>"+numeros[i]+"</li>");
}
*/

/*
const numeros=(numero)=>{
	let array=[];
	let elemento=" ";
	for (var i=0; i<6; i++){
		elemento=parseInt(prompt("Ingrese 6 numeros",0));
		array.push(elemento);  //.push agrega elementos al array;	
	}	
	let ordenar=array.sort();
	let reverse=ordenar.reverse();
	console.log(reverse);
	document.write("Los numeros del array son: "+reverse);
}
 
*/