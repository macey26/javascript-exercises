var repeatString = function(str, count) {
 if (count < 0) {
 	return "ERROR";
 }
   var addString = "";

	for (var i = 0; i < count; i++) {
		
         addString += str;
}
  
      return addString;

}

		
	
repeatString( "hey", -1);

module.exports = repeatString
