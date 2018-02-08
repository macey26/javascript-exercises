var sumAll = function(arr) {

	finalSum = 0;

  for (i =0; i < arr.length; i++){

  	finalSum += i;
}
return finalSum;
}

  sumAll([1, 4]);

module.exports = sumAll
