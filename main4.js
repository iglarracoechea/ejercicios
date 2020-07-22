const comandos = document.getElementById("botones");
const msjDisparo = document.getElementById("msjDisparo");
const msjObj = document.getElementById("msjObj");
var listoDispara;

// Retorna un entero aleatorio entre min (incluido) y max (excluido)
// ¡Usando Math.round() te dará una distribución no-uniforme!
// Para mas info sobre random
// https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Math/random
const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
}

// La promesa "buscandoBlanco" genera un numero random y luego de 5seg ejecuta una funcion "esPar"
// la funcion "esPar()" que esta dentro del timeout Verifica si el numeo es par o no.Si es par
// Si es par dispara, y sino falla.Enviando los msj correspondientes
buscandoBlanco = new Promise(function preparando(exito, error){
  let numRandom = getRandomInt(0, 5000);
  setTimeout(function esPar() {
    //pregunto si es par
    if (numRandom % 2 === 0) {
        exito("Objetivo localizado...Listo para disparar");
    } else {
        error("No puedo fijar el objetivo muchos civiles!");
    }
  }, 5000); //desp de 5seg ejecuto la funcion esPar()
});

const disparar = () => {
  msjDisparo.innerHTML="Rayooo Lassser Disparado"
}
////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////Programe a partir de aca////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////

// Modificar el codigo para reflejar dentro de la pagina si se pudo o no, localizar el objetivo.
// En caso de localizar el objetivo, ejecutar tmb la funcion dispara()....SOLAMENTE SI SE LOCALIZO EL OBJETIVO
/*buscandoBlanco.then(function exito(msj) {console.log(msj)})
              .catch(function error(msj) {console.log(msj)});*/


buscandoBlanco
.then((msj) =>{
    console.log(msj)  
    disparar()
}) 
.catch(msj => {
    console.log(msj)
})             
         













/*



const comandos = document.getElementById("botones");
const msjDisparo = document.getElementById("msjDisparo");
const msjObj = document.getElementById("msjObj");
//let listoDispara;


const getRandomInt = (min, max) => {
      return Math.floor(Math.random() * (max - min)) + min;
}

const blanco = () =>{
    return new Promise((resolve,reject) => {
        let valor = getRandomInt(0, 1000);
        setTimeout(function esPar(){
            if(valor === 0) return resolve('Objetivo localizado...Listo para disparar')
            if(valor === 1) return reject('No puedo fijar el objetivo muchos civiles')
        },3000)
        
    })
}

const disparar = () => {
  msjDisparo.innerHTML="Rayooo Lassser Disparado"
}


blanco()
.then(disparo =>{
  disparar()
  console.log(disparo)
}) 
.catch(error => {
  console.log(error)
})

*/