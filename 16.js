'use strict'
// Programa una función 
//que devuelva el monto final después de aplicar un descuento a una cantidad dada, pe. miFuncion(1000, 20) devolverá 800.

const descuento = (monto = '',porcentaje = ' ')=>{
		if(!monto || !porcentaje) return console.warn('No ingreso monto o porcentaje numero')
		if(monto === undefined || porcentaje === undefined) return console.warn('Undefined')
		if(Math.sign(monto === -1) || Math.sign(porcentaje ===-1)) return console.log('Número negativo')
		if(typeof monto !== 'number' || typeof porcentaje !== 'number') return console.log('Ingrese un numero')

		const descontar = (monto*porcentaje) / 100
		const restar = monto - descontar

		return console.log('Total a pagar '+ restar)
}

descuento(parseInt(prompt('Ingrese monto')),parseInt(prompt('Ingrese porcentaje')))