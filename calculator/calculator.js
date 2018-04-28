 function add (a, b) {
   return a + b;
  	
}

function subtract (a, b) {
	return a -b;
}

function sum (arr) {
	return arr.reduce(function(a, b){
		return a + b
	}, 0);
}

function multiply (arr) {
return arr.reduce(function(a, b){
		return a * b
	}, 1);
 
}

function power(a,  b) {
   
   return Math.pow(a, b);
}

function factorial(num) {
	if (num === 0 || num ===1) {
		return 1;
       }
	for (var i = num - 1; i >= 1; i--) {
		num *= i;	
		}	
	return num
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}