let x=0,
    y=0;

export function movebola (e,bola,stage){
    const $bola = document.querySelector(bola),
          $stage = document.querySelector(stage),
          limitsBall = $bola.getBoundingClientRect(),
          limitStage = $stage.getBoundingClientRect();    

            console.log(limitStage)
            console.log(limitsBall)
            //console.log(e.keyCode)
            //console.log(e.key)
            
                switch(e.keyCode) {
                    case 37:
                        e.preventDefault()
                        if(limitsBall.left > limitStage.left) x--;
                        break;
                    case 38:
                        if(limitsBall.top > limitStage.top){
                            e.preventDefault()
                            y--;
                        } 
                        break;
                    case 39:
                        e.preventDefault()
                        if(limitsBall.right < limitStage.right)x++;
                        break;
                    case 40:
                        if(limitsBall.bottom < limitStage.bottom){ 
                            e.preventDefault()
                            y++;
                        } 
                        break;
                    default:
                        break;
                }
            
            
            $bola.style.transform =`translate( ${x*10}px, ${y*10}px)`
}