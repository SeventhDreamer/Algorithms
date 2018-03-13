
function convertToRoman(num) {
  var romanNumeral=""; //holds the generated romanNumeral
  var roman =["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"]; //the roman numerals
  var arabic=[1000,900,500,400,100,90,50,40,10,9,5,4,1]; //the arabic equivalents of the roman numerals
  
  if(num<4000){ //checks range, can not handle conversions over 4000
	for(var i=0; i<roman.length; i++){ //loops for each roman numeral
		while(num >=arabic[i]){ //adds the correct number of the current roman numeral to romanNumeral
			romanNumeral = romanNumeral.concat(roman[i]);//adds the roman numeral on the end
			num -= arabic[i]; //subtracts the value of the numeral added
		}
	}
  }else{
    return "number is too large";
  }
  
 return romanNumeral;
  }