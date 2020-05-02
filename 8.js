//8: eliminar cierto patron de caracteres de un texto dado( xyz1, xyz2)

const eliminarpatron = (patron , vacio)=>{
		let patron2 = patron.split('')
		patron2.splice(0,3,vacio)
		let patron3=patron2.join('')
		return console.log(patron3)
}

eliminarpatron(prompt('Ingrese patron:'),' ')

//otra  forma


const eliminarCaracteres = ( texto = "", eliminar = "") =>
    (!texto)
    	? console.warn(' No ingresaste un texto')
    	: (!eliminar) //si ingreso un texto, lo elimina
    		? console.error("No ingresaste un texto a eliminar de caracteres")
    		: console.info(texto.replace(new RegExp(eliminar, "ig"), ""));

eliminarCaracteres("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz", "xyz");


