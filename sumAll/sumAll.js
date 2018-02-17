function sumAll (first , final){
	finalSum = 0;

	if(first < 0 || final < 0 || typeof first !== 'number' || typeof final !== 'number'){
		return "ERROR";
	}

	if(final > first){
  for (i = first; i <= final; i++){

  	finalSum += i;
      }
    } else if (first > final ){
  for (i = final; i <= first; i++){

  	finalSum += i;
}   	


    }
return finalSum;
}

 
sumAll();


module.exports = sumAll
