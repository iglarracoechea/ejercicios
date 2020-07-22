const divBotones = document.getElementById("botones");
const cantidadBotones = document.getElementById("cantidad")
const contador = document.getElementById("contador")
const boton = document.getElementById("generar")
const $fragment = document.createDocumentFragment()

document.addEventListener('click', (e)=> {
    if(e.target.matches('#generar')){
        crearBotones(parseInt(cantidadBotones.value));
        cantidadBotones.value= null
        boton.disabled=true//Desactiva el boton para no generar mas botones
    }
})



//La funcion sumar creo una clausura con la variable valor, entonces al forma una clausura se lleva una "referencia"
//es decir todos los botones guardan el valor en la misma variable.En este caso la  variable se llama valor

const crearBotones = (num) => {
    let valor=0 //Esta variable es la que "lleva" la funcion sumar() 
    for (let i = 0; i < num; i++) {
        //Si la defincion de valor la realizo dentro del ciclo for con un let, cada boton va tener su propio contador
        //recordar comentar el "var valor = 0"
        //let valor =0
        const botonContador = document.createElement("button")
        botonContador.textContent=`Sumar ${i}`
        botonContador.addEventListener('click', () =>{
            valor= valor + i 
            contador.innerHTML=""+ valor
        })
        
        $fragment.appendChild(botonContador)
        divBotones.appendChild($fragment)
        
        
    }
}


crearBotones()


/*
//La funcion sumar creo una clausura con la variable valor, entonces al forma una clausura se lleva una "referencia"
//es decir todos los botones guardan el valor en la misma variable.En este caso la  variable se llama valor

boton.addEventListener('click', ()=> {
    crearBotones(parseInt(cantidadBotones.value));
    cantidadBotones.value= null
    boton.disabled=true//Desactiva el boton para no generar mas botones
})

function crearBotones(num){
    //var valor=0 //Esta variable es la que "lleva" la funcion sumar() 
    for (let i = 0; i < num; i++) {
        //Si la defincion de valor la realizo dentro del ciclo for con un let, cada boton va tener su propio contador
        //recordar comentar el "var valor = 0"
        //let valor =0
        var boton = document.createElement("button")
        boton.innerHTML="Sumar "+i
        boton.onclick= function sumar() {
                            valor= valor + i 
                            contador.innerHTML=""+ valor
                        }
        divBotones.appendChild(boton)
        $fragment.appendChild(boton)
        divBotones.appendChild($fragment)

    }
}


const crearBotones = (num) => {
    let valor=0 //Esta variable es la que "lleva" la funcion sumar() 
    for (let i = 0; i < num; i++) {
        //Si la defincion de valor la realizo dentro del ciclo for con un let, cada boton va tener su propio contador
        //recordar comentar el "var valor = 0"
        //let valor =0
        const botonContador = document.createElement("button")
        botonContador.textContent=`Sumar ${i}`
        botonContador.addEventListener('click', () =>{
            valor= valor + i 
            contador.innerHTML=""+ valor
        })
        
        $fragment.appendChild(botonContador)
        divBotones.appendChild($fragment)
        
        
    }
}


*/