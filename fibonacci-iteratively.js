function fib(n){
	if(n === 0 || n === 1)
		return n;

	var a = 0;
	var b = 1;
	var result = 0;

	for(var i = 2; i <= n; i++){
		fibonacciValue = a + b;
		a = b;
		b = fibonacciValue;
	}

	return fibonacciValue;
}

module.exports = {
	fib
}