
import evento from "./dom/menu_burger.js";
import {reloj}  from "./dom/reloj.js";
import {alarma} from "./dom/alarma.js";
import {movebola} from "./dom/bola.js";
import countdown from "./dom/countdown.js";
import scrollTopButton from "./dom/boton-scroll.js"

//import {countdown} from "./dom/countdown.js";


document.addEventListener('DOMContentLoaded',e =>{
    evento('.panel-btn','.panel','.menu a')
    reloj('#reloj','#iniciar','#detener')
    alarma('#inicio-alarma','#detener-alarma','alarma.mp3')
    countdown('countdown','July 25,2021 17:56:00','Feliz Cumpleaños Vieja Au')
    
})

document.addEventListener('keydown', e =>{
    movebola(e,'.bola','.stage')
})

scrollTopButton('.scroll-top-btn')


//up,down,right,left
