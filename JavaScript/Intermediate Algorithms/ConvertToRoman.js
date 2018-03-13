
function convertToRoman(num) {
  var romanNumeral="";
  if(num<4000){ //checks range
    if(num >=1000){
      while(num >=1000){
        romanNumeral = romanNumeral.concat("M");
        num -= 1000;
      }

    }
    if(num >=900){
      romanNumeral = romanNumeral.concat("CM");
       num -= 900;
    }
    if(num >=500){
      romanNumeral = romanNumeral.concat("D");
       num -= 500;
    }
    if(num >=400){
      romanNumeral = romanNumeral.concat("CD");
       num -= 400;
    }
    if(num >=100){
      while(num >=100){
        romanNumeral = romanNumeral.concat("C");
        num -= 100;
      }
    }
    if(num >=90){
      romanNumeral = romanNumeral.concat("XC");
      num -= 90;
    }10
    if(num >= 50){
      romanNumeral = romanNumeral.concat("L");
       num -= 50;
    }
    if(num >= 40){
      romanNumeral = romanNumeral.concat("XL");
       num -= 40;
    }
    if(num >= 10){
      while(num >=10){
      romanNumeral = romanNumeral.concat("X");
       num -= 10;
      }
    }
    if(num ==9){
      romanNumeral = romanNumeral.concat("IX");
       num -= 9;
    }else{
      if(num >= 5){
        romanNumeral = romanNumeral.concat("V");
         num -= 5;
      }
      if(num ==4){
         romanNumeral = romanNumeral.concat("IV");
          num=0;
      }
      if(num <4){
        while(num >0){
        romanNumeral = romanNumeral.concat("I");
         num -= 1;
        }
      }
    }

  }else{
    return "number is too large";
  }
  
 return romanNumeral;
}

