var removeFromArray = function(arr) {
 
  var args = Array.from(arguments);


arr = arr.filter(item => !args.includes(item))
	
return arr;
};

removeFromArray([1, 2, 3, 4]);


module.exports = removeFromArray
