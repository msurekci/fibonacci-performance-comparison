var fibonacciSequence = {};

function fib(n){
	var value;

    if (n in fibonacciSequence)
      value = fibonacciSequence[n];
    else 
      if (n === 0 || n === 1)
        value = n;
      else
        value = fib(n - 1) + fib(n - 2);

      fibonacciSequence[n] = value;
    
    return value;
}

module.exports = {
	fib
};