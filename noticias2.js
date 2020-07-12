const titulo = document.getElementById('tNoticias');
const subTitulo = document.getElementById('subNoticia');
const cuerpo = document.getElementById('cNoticias');
const dashboard = document.getElementById('dashboard')
//var noticias = new Array
var noticias= [];

function cargarNoticias() {
   var tituloHtml= titulo.value;
   var subTituloHtml= subTitulo.value;
   var cuerpoHTml = cuerpo.value;
 
   //var articulo  = new Object();
   var articulo = {};
   articulo.titulo=tituloHtml;
   articulo.subTitulo=subTituloHtml;
   articulo.cuerpo=cuerpoHTml;

   noticias.push(articulo);
    
   titulo.value="";
   subTitulo.value="";
   cuerpo.value="";

   console.log(noticias)
   desplegar(articulo)
}

function desplegar(articulo) {
    
    var titulo = articulo.titulo;
    var subTitulo= articulo.subTitulo;
    var curepo = articulo.cuerpo.substring(0,200);

    var divcard= document.createElement('div')
    var div = document.createElement('div');
    var h2 = document.createElement('h2');
    var h3 = document.createElement('h3');
    var p = document.createElement('p');

    divcard.className="card col-3"
    div.className="card-body border border-primary  ";
    h2.className="card-title";
    h3.className="card-subtitle mb-2 text-muted";
    p.className="card-text";
    
    h2.innerText=titulo
    h3.innerText=subTitulo
    p.innerText=curepo
    
    /*
    <div class="card" style="width: 18rem;">
        <div class="card-body">
           <h5 class="card-title">Card title</h5>
           <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
         </div>
   </div>
    */

    div.appendChild(h2);
    div.appendChild(h3);
    div.appendChild(p);

    divcard.appendChild(div)

    /*
    console.log(h2)
    console.log(h3)
    console.log(p)
    */
    
    dashboard.appendChild(divcard)
     /*
     <div>
     <div>
        <h2></h2>
        <h3></h3>
        <p></p>
    </div>
    </div>
      */
    
}

