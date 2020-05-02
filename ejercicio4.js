
var num1=parseInt(prompt("Ingrese un número",0));
var num2=parseInt(prompt("Ingrese otro número",0));
var cont=0

/*
while(numero1<numero2){
	numero1++;
	if(numero1%2 !=0){
		console.log(numero1);
	}
}*/


for(let i=num1+1;i<=num2;i++){
		if (i%2==1){
			console.log(i)
		}
		cont++
}

console.log('Cantidad impares: '+cont)