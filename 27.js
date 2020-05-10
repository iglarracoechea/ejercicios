/*Programa una clase llamada Pelicula.

La clase recibirá un objeto al momento de instanciarse con los siguentes datos: id de la película en IMDB, 
titulo, director, año de estreno, país o países de origen, géneros y calificación en IMBD.
 
- Todos los datos del objeto son obligatorios.
- Valida que el id IMDB tenga 9 caracteres, los primeros 2 sean letras y los 
7 restantes números.
- Valida que el título no rebase los 100 caracteres.
- Valida que el director no rebase los 50 caracteres.
- Valida que el año de estreno sea un número entero de 4 dígitos.
- Valida que el país o paises sea introducidos en forma de arreglo.
- Valida que los géneros sean introducidos en forma de arreglo.
- Valida que los géneros introducidos esten dentro de los géneros 
	 aceptados*.
- Crea un método estático que devuelva los géneros aceptados*.
- Valida que la calificación sea un número entre 0 y 10 pudiendo ser 
decimal de una posición.
- Crea un método que devuelva toda la ficha técnica de la película.
- Apartir de un arreglo con la información de 3 películas genera 3 
instancias de la clase de forma automatizada e imprime la ficha técnica 
de cada película.
* Géneros Aceptados: Action, Adult, Adventure, Animation, Biography, Comedy, Crime, Documentary ,Drama, Family, 
Fantasy, Film Noir, Game-Show, History, Horror, Musical, Music, Mystery, News, Reality-TV, Romance, Sci-Fi, Short,
Sport, Talk-Show, Thriller, War, Western. */


class Peliculas {
	constructor({id,titulo,director,anioEstreno,pais,generos,calificacion}){
		this.id = id;   //this se limita al obejto declarado
		this.titulo = titulo;
		this.director = director;
		this.anioEstreno = anioEstreno;
		this.pais = pais;
		this.generos = generos;
		this.calificacion = calificacion;

		this.validarIMDB(id); //reveer
		this.validarTitulo(titulo);
		this.validarDirector(director);
		this.validarAnioEstreno(anioEstreno)
		this.validarPaises(pais)
		this.validarGeneros(generos);
		this.validarCalificaciones(calificacion);
	}
	
	static get listaGeneros(){ //atributo static, no se pueden invocar con this 
		return ['Action','Adult','Adventure','Animation','Biography','Comedy','Crime','Documentary','Drama','sport','family']
	}
	
	static generosAceptados(){
		return console.info(`Los género aceptados son: ${Peliculas.listaGeneros.join(', ')}`) //se llama al static get listaGeneros
	}

	validarArray(propiedad,valor){
		if(!valor) return console.warn(`${propiedad} ${valor} esta vacio`);
		if(!(valor instanceof Array )) return console.warn(`El valor ingresado no es un array`);
		if(valor.length === 0 ) return console.warn('El array esta vacio,no hay datos')

		for(let texto of valor){
			if(typeof texto !=='string')return console.warn(`El valor ${texto} ingresado no es un texto`)
		}
		
		return true;
	}
	
	validarLongitudCadena(propiedad,valor,longitud){
		if(valor.length > longitud) return console.log(`${propiedad} "${valor}" excede el numero de caracteres permitidos (${longitud})`)
		
		return true
	}

	validarNumeros(propiedad,valor){
		if(!valor) return console.warn(`${propiedad} "${valor}" esta vacio`);
		if(typeof valor !== 'number') return console.error(`${propiedad} "${valor}" ingresado, no tiene numeros`);

		return true
	}
	
	validarFloat(propiedad,valor){
		if(!valor) return console.warn(`${propiedad} "${valor}" esta vacio`);
		if(typeof valor !== 'number') return console.error(`${propiedad} "${valor}" ingresado, no tiene numeros decimales`);

		return true
	}
	validar
	/*validarCantidadDigitos(propiedad,valor,cantidad){
		let contarDigitos = ('' + valor).length;
		if(contarDigitos > cantidad || contarDigitos < cantidad )return console.error(`${propiedad}ingresado inválido '${valor}' no tiene 4 digitos`)
		
		return true
	}*/

	validarCadena(propiedad,valor){  //funcion que se reutiliza en validar imdb, director y titulo
		if(!valor) return console.warn(`${propiedad} "${valor}" esta vacio`);
		if(typeof valor !== 'string') return console.error(`${propiedad} "${valor}" ingresado, no es una cadena de texto`);	

		return true;	//si los dos if no se activan la validación es correcta
	}
	
	validarIMDB(id){
	if(this.validarCadena('IMDB: ',id)) //si es verdadero(true)
		if(!(/^([a-z]){2}([0-9]){7}$/.test(id))) //{2} son 2 caracteres que pueden ir
			return console.error(`IMDB id "${id}"no es válido, debe tener 9 caracteres,los 2 primeros letras minúsculas,los 7 restantes numeros`);
	}
	validarTitulo(titulo){
		if(this.validarCadena('Título: ',titulo))
			this.validarLongitudCadena('Titulo',titulo,80);
	}
	
	validarDirector(director){
		if(this.validarCadena('Director: ',director))
			this.validarLongitudCadena('Director: ',director,50);
	}

	validarAnioEstreno(anio){
		if(this.validarNumeros('Año Estreno:', anio))
			if(!(/^[0-9]{4}$/.test(anio))) return console.error(`Año estreño ingresado ${anio} es inválido, no tiene 4 digitos`)
			//this.validarCantidadDigitos('Año ',anio,4);
	}

	validarPaises(paises){
		this.validarArray('País/Países: ',paises)
		
	}
	
	validarGeneros(generos){
		if(this.validarArray('Generos:',generos)){
			for(let genero of generos){
				//console.log(genero,Peliculas.listaGeneros.includes(genero)) //devuelve true or false
				if (!Peliculas.listaGeneros.includes(genero)){
					console.error(`Genero/s incorrecto/s ${generos.join(',')}`)
					Peliculas.generosAceptados();
				}else{
					console.log('Genero Aceptado')
				}
			}
		
		}
	}

	validarCalificaciones(calificacion){
		if(this.validarNumeros('Calificación',calificacion)){
			return (calificacion < 0 || calificacion > 10 )
				? console.error('La calificación debe estar entre 0 y 10')
				: this.calificacion = calificacion.toFixed(1); 
		}
		/*this.validarFloat('Calificaciones:', calificacion)
			 console.log('Calificación de la pelicula: '+calificacion.toFixed(1))*/
		
	}

	devolverFichaTecnica(){
		return console.info(`Ficha Técnica:\nID: ${this.id} \nTitulo: ${this.titulo} \nDirector: ${this.director} \nAño: ${this.anioEstreno} \nPaís: ${this.pais} \nGéneros: ${this.generos}\nCalificación: ${this.calificacion} `)
	}

}

Peliculas.generosAceptados();

/*const peli = new Peliculas({
	id: 'tt0075148',
	titulo: 'Bridge of Spies',
	director: 'Tom Hanks',
	anioEstreno: 2525,
	pais:['Estados Unidos'],
	generos:['family'],
	calificacion: 8.68,
})
*/
//peli.devolverFichaTecnica()

const misPelis = [
	{
		id: 'tt0075148',
		titulo: 'Bridge of Spies',
		director: 'Tom Hanks',
		anioEstreno: 2525,
		pais:['Estados Unidos'],
		generos:['family'],
		calificacion: 8.5,
	},
	{
		id: 'tt0025300',
		titulo: 'The English game',
		director: 'Tom Hanks',
		anioEstreno: 2525,
		pais:['UK'],
		generos:['family'],
		calificacion: 7.8,
	
	},
	{
		id: 'tt0054213',
		titulo: 'DeepWater Horizon',
		director: 'Peter Berg',
		anioEstreno: 2525,
		pais:['Estados Unidos'],
		generos:['sport'],
		calificacion: 8.25,
	}

]

misPelis.forEach(el => new Peliculas(el).devolverFichaTecnica())












//console.log(JSON.stringify(peli))
/* id peliculas: 
tt0075148
tt0019130
tt4154796*/

/*function nombre_valido (valor)
{
var reg = /^([a-z ñáéíóú]{2,60})$/i;
if(reg.test(valor)) return true;
else return false;
*/
/*
var int_number = 254;  contar la cantidad de dijitos de un numero
var int_length = (''+int_number).length;*/