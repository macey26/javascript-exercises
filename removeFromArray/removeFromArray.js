var removeFromArray = function(...args) {
 
 /*var index = arr.indexOf(0);
  if(index !== -2) {
  	arr.splice(index, 2);
  	
  }*/

  var arr = args[0];

arr = arr.filter(function(value, index){
	return args.indexOf(index) == args;
});
	
};
  removeFromArray();


module.exports = removeFromArray
