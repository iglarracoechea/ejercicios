export default function countdown (id,limitDate,message){
    const $count = document.getElementById(id),
          countDate = new Date(limitDate).getTime()

    //operador del modulo devuele el resto
    let countTempo = setInterval(() => {
        let now = new Date().getTime(),
            
            limitTime = countDate - now,
            days = Math.round(limitTime /(1000 * 60 * 60 * 24)),
            hours = Math.round(limitTime % (1000 * 60 * 60 * 24)/(1000 * 60 * 60)),
            minutes =('0'+ Math.round(limitTime % (1000 * 60 * 60)/(1000 * 60))).slice(-2),
            seconds = ('0'+ Math.round(limitTime % (1000 * 60) /1000)).slice(-2);
            
            //conver = Math.round(limitTime/day);
    
        //console.log(now,limitTime)

        $count.innerHTML = `<h3>Faltan: ${days} dias, ${hours} horas, ${minutes} minutos y ${seconds} segundos para tu cumpleaños</h3> `
    
        if(limitTime <= 0){
            clearInterval(countTempo)
            $count.innerHTML = `${message}`
            alert(message)
        }
    },1000);

}

