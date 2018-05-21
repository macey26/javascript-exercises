function translate(str) {
	var pigLatin = [];
	var regex = /[aeiou]/gi
	var tempArr = "";


if (str[0].match(regex)){
	 return str + "ay";
  } else {
  	  pigLatin = str.split("")

  	 tempArr = pigLatin.shift()
  	  pigLatin.push(tempArr);
  	   
   }

   return pigLatin.join("")+"ay";
   console.log(pigLatin) ;
}

translate("banana");


module.exports = {
	translate
}

