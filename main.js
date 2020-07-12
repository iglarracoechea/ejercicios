/*
const h1 = document.getElementById('titulo')
console.log(h1)

// var y let
var num1= 5
let num2= 55


function suma(x,y) {
    let res 
    res = x+y
    if(x>0)
    {
        var nombre = "juani"
        console.log(nombre)
    }
    return res
}

console.log("Retorno",suma(5,5))
//console.log(res)
*/

//Clausura
/*
function padre() {
    
    var nomPadre="Vader:Yo soy tu padre!"        
    function hijo() {
        console.log("Quien es mi padre?")
        console.log(nomPadre)
    }

    return hijo

}

var hijo = padre()
console.dir(hijo)
*/

//callback
/*
function fun1(fun2)
{
    console.log("Hola soy fun1")
   // console.log(callback)
    fun2()
}

function fun2()
{ console.log("Hola soy fun2 ")}

fun1(fun2)
*/
/*
function humano(habildad) {

    var nombre= "gera";
    console.log("Hola soy gera")
    habildad()
}

humano(function comer() {  
    console.log("habilidad comer")
})

humano(function caminar() {
    console.log("Habilidad caminar")
    
})

*/
//Promesas

//setTimeout(funcion, tiempo);

function tarea(exito,fracaso) {
    var x=2
    if(x===0)   
        exito("json noticias")
    else
        fracaso ("No es cero...")

    }

/*function mensaje(msj) {
    console.log(msj)*/
//}

//console.log(tarea)
prom1 = new Promise(tarea);

console.log("1");

prom1.then(
    (msj)=>{
        console.log("soy el callback de exito")
        console.log(msj)
   }
).catch(error => console.log(error))

console.log("2");
console.log("3");


