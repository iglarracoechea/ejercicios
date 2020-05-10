//25) Programa una función que dado un arreglo de elementos, 
//elimine los duplicados, pe. miFuncion(["x", 10, "x", 2, "10", 10, true, true]) devolverá ["x", 10, 2, "10", true].

const eliminar = (elementos=undefined)=>{
	if(elementos === undefined) return console.warn ('No ingreso arreglo')
	if(!(elementos instanceof Array)) return console.log('El valor expresado no es un array')
	if(elementos.length === 0) return console.log('El arreglo esta vacio')
	if(elementos.length === 1) return console.log('El arreglo debe tener dos elementos')

	
	const newArr = elementos.filter((value,index,self) => self.indexOf(value)===index)
	//set permite generar un objeto en el que no se permiten elementos duplicados
	//const newArr = Array.from(new Set(elementos))
	
	return console.info({
		original: elementos,
		sin_duplicados: [...new Set(elementos)], //permite generar un objeto en el que no se permiten elementos duplicados
		new_Arr: newArr
	})
}

eliminar(["x", 10, "x", 2, "10", 10, true, true])

//los objetos no admiten duplicados?


