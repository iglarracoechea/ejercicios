const h1 = document.getElementById('titulo').innerText //el contenido se puede modificar en const
//h1.innerText('Hola')

var num1 = 5 //se puede declarar abajo(despues) y funciona igual
let num2 = 55

function suma (x,y){
    let res
    res1 = x+y
    return res1
}

//console.log(res1) //invalido porque solo existe en suma
console.log(suma(5,5))

