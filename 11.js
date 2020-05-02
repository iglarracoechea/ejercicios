//11
const capicua = (numero) =>{
		let comparar = numero.split('').reverse().join('')
		return (comparar === numero)
				? console.log(numero +' Es capicua')
				: console.log(numero +' No es capicua')
}

capicua(prompt('Ingrese un numero'))
