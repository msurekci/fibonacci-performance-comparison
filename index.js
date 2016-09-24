var fibRecursion = require('./fibonacci-recursion');
var fibMemorizedRecursion = require('./fibonacci-memorized-recursion');
var fibIteratively = require('./fibonacci-iteratively'); 

// var hrstart = process.hrtime();
// fibRecursion.fib(50);
// hrend = process.hrtime(hrstart);
// console.info("Recursion execution time: %ds %dms", hrend[0], hrend[1]/1000000);

var hrstart = process.hrtime();
fibIteratively.fib(50);
hrend = process.hrtime(hrstart);
console.info("Iteratively, execution time: %ds %dms", hrend[0], hrend[1]/1000000);

var hrstart = process.hrtime();
fibMemorizedRecursion.fib(50);
hrend = process.hrtime(hrstart);
console.info("Recursion and memorized, execution time: %ds %dms", hrend[0], hrend[1]/1000000);