// function- given number is prime or not
let n=parseInt(prompt("enter value"));

function prime(a){
	for(i=2;i<=a;i++){
	if(a%i==0){
		if(i==a){
			document.write('The given number is '+a+' and it is a prime number.');
		}
		else if(i!=a){
			document.write('The given number is '+a+' and it is not a prime number.');
			break;
		}
	}
}
}
prime(n)