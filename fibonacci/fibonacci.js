var fibonacci = function(num) {
	  var first = 0, second = 1, next = 1;

	  if (num < 0){
	  	return "OOPS"
	  }
  
  for(var i = 2; i <= num; i++){
    next = first + second;
    first = second;
    second = next; 
  }
  return next;
}


module.exports = fibonacci
