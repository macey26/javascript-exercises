var snakeCase = function(str) {
	var answer =  str;

		if(str.match(/^[a-z]/)){
			answer = str.replace(/([a-z]+)([A-Z])|[_|\s]+/g, '$1_$2');
		}

	return answer.replace(/[.?!,-]/g, ' ').replace(/\s+/g, ' ').trim().replace(/ /g, '_').toLowerCase(); 


}

module.exports = snakeCase
