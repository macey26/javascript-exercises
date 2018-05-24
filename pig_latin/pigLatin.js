function translate(str) {

// var char = str.search(/[aeiou]/);
// switch (char){
  
//   case 0:
//   	str = str + "ay"
//   break;
//   case -1:
//     str = str + "ay"
//   break;
//   default:
//   str = str.substr(char) + str.substr(0, char) + 'ay';

// }

// return str;

	var pigLatin = [];
	var vowels = /[a, e, i, o, u]/g;
	var tempArr = "";
	


if (str[0].match(vowels)){
	 return str + "ay";
  } else {
    str.split("");
while(str.indexOf(str.match(vowels)[0])){
  	 tempArr = pigLatin.shift()
  	  pigLatin.push(tempArr);
  	  console.log(str);
  	 }  
   }

   return pigLatin.join("")+"ay";
   console.log(pigLatin) ;
}

translate("cherry");


module.exports = {
	translate
}
