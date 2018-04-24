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

function multiply (a, b) {
	return a * b;
	
}
var result = multiply(a, b)


function power() {
	
}

function factorial() {
	
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}