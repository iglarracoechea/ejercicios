export function alarma(inicio,detener,sound){
    let alarmaTempo
    const $alarm = document.createElement('audio')
    $alarm.src = sound
    
    document.addEventListener('click', (e) => {
        
        if(e.target.matches(inicio)){
            
            $alarm.play()
            e.target.disabled = true
            
            /*alarmaTempo = setTimeout(() => {
                 $alarm.play()
                 e.target.disabled = true
            },2000)
            */
        }

        if(e.target.matches(detener)){
            //clearTimeout()
            $alarm.pause()
            //$alarm.currentTime = 0;  //vuelve a 0
            document.querySelector(inicio).disabled = false
        }
    })
}