export function reloj(clock,btnInicio,btnDetener){

    let clockTempo;

    document.addEventListener('click',(e)=>{
        
        if(e.target.matches(btnInicio)){
            clockTempo = setInterval(() => {
                
                let hour = new Date().toLocaleTimeString()
                document.querySelector(clock).innerHTML = `<h3>${hour}</h3>`
                
                //document.getElementById('iniciar').disabled = true
                e.target.disabled = true

            }, 1000);
        }

        if(e.target.matches(btnDetener)){
            clearInterval(clockTempo);
            
            document.querySelector(clock).innerHTML = null;

            document.querySelector(btnInicio).disabled = false
        }

    })

}
