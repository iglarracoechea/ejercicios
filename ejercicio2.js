'use strict'

//Utilizando un bucle,mostrar la suma y la media de los números introducidos hasta introducir un número negativo
// y ahi mostrar los resultados


let suma=0;
let cont=0
let numero

do{
   numero=parseInt(prompt('Ingrese un numero'))
   if(isNaN(numero)){
   	  numero=parseInt(prompt('Ingrese un numero'))
   }else if (numero>=0) {
   	 suma+=numero
   	 cont+=1
   }
}while(numero>=0)

 console.log('La suma es '+ suma)
 console.log('El promedio es '+suma/cont)


