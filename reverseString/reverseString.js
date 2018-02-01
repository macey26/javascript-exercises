var reverseString = function(str) {

	var stringSplit = str.split('').reverse().join('');

   return stringSplit;
}

reverseString("123! abc!");

module.exports = reverseString