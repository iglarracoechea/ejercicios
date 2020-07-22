//const comando = document.getElementById('botones');
//const comando2 = document.getElementById('boton2')
//const msj = document.getElementById("msj");
//const msjObj = document.getElementById("msjObj")
//let apuntado = false;//Variable q indica si se  adquirio un objetivo... siempre arranca en falso

/*Funcion que apunta 
function funcTime() {
          apuntado=true;
          msjObj.innerText="Objetivo adquirido...Puede disparar"
}


//ESta funcion la llama el boton apuntar
function apuntar() {
  //SetTimeout va a recibir una funcion y la va ejecutar desp de 5000 mseg == 5seg
  //la funcion "funcTime" esta declarada arriba
  setTimeout(funcTime, 1000);
      msjObj.innerText="Apuntando....."
}

//Esta funcion la llama el boton disparar
function disparar() {
  if (apuntado) {
      msj.innerText="Disparando...objetivo destruido"
  } else {
      msj.innerText="Todavia no hay objetivo fijado..."
  }
}

*/
//document.addEventListener('click',)

const msj = document.getElementById("msj");
const msjObj = document.getElementById("msjObj")
let apuntado = false;//Variable q indica si se  adquirio un objetivo... siempre arranca en falso


const funcTime = () =>{
    apuntado=true;
    msjObj.textContent = 'Objetivo adquirido...Puede disparar'
}

document.addEventListener('click', (e) => {
        if(e.target.matches('#boton1')){
           setTimeout(funcTime,1500);
              msjObj.textContent='Apuntando.....'
        }  
        
        if(e.target.matches('#boton2')){
          
            if(apuntado === true) msj.innerText="Disparando...objetivo destruido"
            if(apuntado === false) msj.innerText="Todavia no hay objetivo fijado..."
            
        }

})

//functime()