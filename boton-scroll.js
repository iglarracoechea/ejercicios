
export default function scrollTopButton(btn){
    const $scrollBtn = document.querySelector(btn);

    
    
    window.addEventListener('scroll', e =>{
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if(scrollTop > 880){
            $scrollBtn.classList.remove('hidden')
        }else{
            $scrollBtn.classList.add('hidden')
            
        }
        //console.log(window.pageYOffset,document.documentElement.scrollTop);
    })

    window.addEventListener('click',e=>{
        
        if(e.target.matches(btn)){
            window.scrollTo({  //objeto recibe tres parametros
                
                behavior:"smooth",
                top: 0 //barra de desplaazamiento 
            }) 
        }
    })
}