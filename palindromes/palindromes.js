var palindromes = function(str) {

 var replacer = /[^A-Za-z0–9]/g;

  var lowerCaseReplace = str.toLowerCase().replace(replacer, '');

 var splitReverse = lowerCaseReplace.split("").reverse().join("");

if (lowerCaseReplace === splitReverse) {

	return true;
} else {

	return false;
}

 }

module.exports = palindromes
