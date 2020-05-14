'use strict'
/*const ingresar = (peso) => {
    
    //camion = []
    let salir
    let contcamiones = 0
    do{
        let contpeso= 0
        let suma=0
        let contproductos=0
            do{
                peso = parseInt(prompt('Ingresar peso: '))
                suma+=peso
                contproductos+=1
            }while(suma <= 200)
        
        console.log(suma)
        contcamiones++
        
        salir = parseInt(prompt('Ingrese 0 para salir'),0)
        
    }while(salir !== 0)
   

    return console.log(`Cantidad de camiones cargados ${contcamiones}`)
}

ingresar()*/

const ingresar = (contraseña)=>{
    let contfallido = 1
    let validar = false
                                //!validar es igual a false(es lo mismo que poner validar === false)
    while(contfallido < 3 && !validar){ //sino se cumplen las dos sale. !validar lo toma como verdadero y lo niega a falso
        if(contraseña === 'hola'){ 
            validar=true
        }else{
            contfallido++
            contraseña=prompt('Ingrese nuevamente la contraseña')
        }
    }
    
    
    if(validar){
        console.log('Contraseña correcta')
    }else{
        console.log('Intentos máximos superados')
    }
    
}

ingresar(prompt('Ingresar contraseña')) 


/*const ingresar = (contraseña) =>{
    let cantintentos = 2
    while(contraseña != undefined){
        
        if(cantintentos > 0){
            if(contraseña === 'hola'){
                alert('Contraseña valida')
                break;
            }else if(contraseña !== 'hola'){
                contraseña = prompt('Contraseña no valida, ingrese nuevamente:')
                cantintentos--
                //continue
            }
        }else{
            alert('Ya ha intentado demasiadas veces, sorry')
            break;
        }
    }


}

ingresar(prompt('Ingrese contraseña:'))*/




let hola1 = false

while(hola1){
    alert('hola')
}