//9
const factorial = (numero)=>{
		let factorial = 1
		for (let i=1; i<=numero;i++){
			factorial=factorial*i
		}
		console.log('El factorial es '+factorial)
}
factorial(parseInt(prompt('Ingrese un número:')))