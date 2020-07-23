

export default function evento(boton,panel,menuLink){
    
    document.addEventListener('click', (e)=>{
    
        if(e.target.matches(boton) || e.target.matches(`${boton} *`)){
            document.querySelector(panel).classList.toggle('is-active')
            document.querySelector(boton).classList.toggle('is-active') //para que funcione animación del boton hay que usar 'is-active'
        }

        if(e.target.matches(menuLink)){
            document.querySelector(panel).classList.remove('is-active')
            document.querySelector(boton).classList.remove('is-active')
        }
    })


}
