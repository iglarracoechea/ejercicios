export default function darkTheme(btn,classDark){
    const $themeButton = document.querySelector(btn)

    const $selectors= document.querySelectorAll('[data-dark]')  //los data-atributtes van entre corchetes

    console.log($selectors)

    let moon = "🌙",  
        sun = "☀️"
    
    const lightMode = () => {
        $selectors.forEach(el => el.classList.remove(classDark))
        $themeButton.textContent = moon
        localStorage.setItem('theme','light')
    }

    const darkMode = () => {
        $selectors.forEach(el => el.classList.add(classDark))
        $themeButton.textContent = sun
        localStorage.setItem('theme','dark')
    }

    document.addEventListener('click',e =>{
        if(e.target.matches(btn)){
            if($themeButton.textContent === moon){
                darkMode()
            }else{
                lightMode()
            }
        }
    })

    document.addEventListener('DOMContentLoaded',e =>{  
        if(localStorage.getItem('theme')=== null) localStorage.setItem('theme','light');
        //if(localStorage.getItem('theme') === 'light') lightMode();
        if(localStorage.getItem('theme') === 'dark') darkMode();
    })
}

//los data-atributtes van entre corchetes. Se usan para desencadenar cierta programacion en los componentes