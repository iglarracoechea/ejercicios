/*const board = document.getElementById("boardImg");
const h1= document.getElementById("nombreArchivo")
const $fragment = document.createDocumentFragment()

const wallP = [
"1416250650_preview_btf_bg.png",
"7l8vx6hqybh41.png"
];*/

//    <img src="" alt="">


//------------------------------------------------------------------------------------
//------------------------------Clausuras---------------------------------------------
//------------------------------------------------------------------------------------

//modificar para que cuando el mouse pase sobre una imagen, se detalle la ruta en h1
//Como esta el codigo solamente mostrara la ultima ruta, xq se genero una clausura con la img
//es decir no estoy almacenando el valor de img, sino una "referencia" al valor de img
//motivo por el cual todos las imagenes guardan la ultima ruta.
/*const cargaImg = ()=> {
    for (let i = 0; i < wallP.length; i++) {
        let img = document.createElement("img");
        img.src="./Wallpapers/"+wallP[i];
        img.width="800"
        img.height="400"
        img.addEventListener('mouseenter', () => {
            //Se crea una CLAUSURA con img...
            h1.innerHTML="La direccion de la imagen es : "+img.src
        })
        
        $fragment.appendChild(img)
        board.appendChild($fragment)
        
    }    
}
*/
const board = document.getElementById("boardImg");
const h1= document.getElementById("nombreArchivo")
const $fragment = document.createDocumentFragment()

const wallP = [
"1416250650_preview_btf_bg.png",
"7l8vx6hqybh41.png"
];


const cargaImg = () => {
    wallP.forEach((elemento) =>{
        let img = document.createElement('img');
        img.src=`./Wallpapers/${elemento}`
        img.width='600';
        img.height='400'

        img.addEventListener('mouseover', () =>{
            h1.innerHTML = `<mark>La dirección de la imágen es ${img.src}</mark>`
        })

        $fragment.appendChild(img)
        board.appendChild($fragment)
    })
}



cargaImg()

//'./Wallpapers/' + elemento