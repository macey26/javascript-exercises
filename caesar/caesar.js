var caesar = function(str, places) {

	if (places < 0){
		return caesar(str, places + 26);
	}

	var answer = '';
  
  for(var i = 0; i < str.length; i++){

  	var character = str[i];

  	if (character.match(/[a-z]/i)) {



  	if (str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 90){
  		character = String.fromCharCode(((str.charCodeAt(i) - 65 + places) % 26) + 65);

    }else if(str.charCodeAt(i) >= 97 && str.charCodeAt(i) <= 122){
      character = String.fromCharCode(((str.charCodeAt(i) - 97 + places) % 26) + 97 );
    }

  	}

  	answer += character;
   
  }
  
  return answer;


}

module.exports = caesar
