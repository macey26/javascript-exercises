var ftoc = function(fahrenheit) {

	var celsius;

	celsius = fahrenheit - 32 * 5 / 9;

    return celsius;
  
}


var ctof = function(celsius) {
    var fahrenheit;

  fahrenheit = celsius * 9/5 + 32;
  return fahrenheit;
}

ctof()

module.exports = {
  ftoc,
  ctof
}

