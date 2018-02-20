var ftoc = function(fahrenheit) {

	

	 var celsius = Math.round((fahrenheit - 32) * 5 / 9 * 10) / 10;

    return celsius;
  
}

ftoc();


var ctof = function(celsius) {
   

var fahrenheit = Math.round(((celsius * 9/5 ) + 32) * 10) / 10;
  return fahrenheit;
}

ctof()

module.exports = {
  ftoc,
  ctof
}

