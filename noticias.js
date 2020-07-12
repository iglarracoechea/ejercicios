const titulo = document.getElementById('tNoticias'),
      button = document.getElementById('button'),
      subTitulo = document.getElementById('subNoticia'),
      cuerpo = document.getElementById('cNoticias'),
      dashboard = document.getElementById('dashboard');


let noticias = [];

button.addEventListener('click',()=>{
    let tituloHtml = titulo.value,
        subTituloHTML = subTitulo.value,
        cuerpoHtml = cuerpo.value;

    let articulo = {
        titulo: tituloHtml,
        subtitulo: subTituloHTML,
        cuerpo: cuerpoHtml
    }

    noticias.push(articulo)
    console.log(noticias)
    
    titulo.value = '';
    subTitulo.value = '';
    cuerpo.value = '';

    desplegar(articulo)
    
})



const desplegar = articulo => {
    
    let titulo = articulo.titulo,
        subTitulo = articulo.subTitulo,
        cuerpo = articulo.cuerpo.substring(0,200);

    let divcard= document.createElement('div');
    let div = document.createElement('div');
    let h2 = document.createElement('h2');
    let h3 = document.createElement('h3');
    let p = document.createElement('p');

    divcard.className="card col-3"
    div.className="card-body border border-primary  ";
    h2.className="card-title";
    h3.className="card-subtitle mb-2 text-muted";
    p.className="card-text";
    
    div.appendChild(h2)
    div.appendChild(h3)
    div.appendChild(p)

    divcard.appendChild(div)

    dashboard.appendChild(divcard)

    h2.innerText=titulo
    h3.innerText=subTitulo
    p.innerText=cuerpo
}