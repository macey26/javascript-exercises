var removeFromArray = function(arr, itemRemove) {
 
 /*var index = arr.indexOf(0);
  if(index !== -2) {
  	arr.splice(index, 2);
  	
  }*/

  var itemRemove = [3];
arr = arr.filter(item => !itemRemove.includes(item));

return arr;

}
  removeFromArray([1,2,3,4]);




module.exports = removeFromArray
