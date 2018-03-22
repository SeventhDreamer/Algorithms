 //checks just the number for correctness
function phoneNumCorrect(st){
  //pull out all the digits
  var number = st.match(/(\d)/g);
  if(number.length ==11){
    return number[0]==1; //check for US prefix
  }else if(number.length ==10){
    return true; //standard 10 digit number
  }else{
    return false; //number is not correct
  }
}

//check input string for a valid string
function telephoneCheck(str) {
  //check for invalid special characters
  if(str.match(/[\s\(\)\-]/g) != null &&(str.match(/[\s\(\)\-]/g).length != str.match(/[\W]/g).length)){
    return false;
  }
  
  //check for no parenthesis or correct parenthesis use
  if(str.match(/[\(|\)]/g) == null || (str.match(/(\()[\d]{3}(\))/g) !=null && str.match(/(\()[\d]{3}(\))/g).length ==1)){
    //check for dashes
    if(str.match(/(\-)/g) == null ||//no dashes
       //two dashes in correct locations
       (str[str.length-9] =="-"&& str[str.length-5] =="-" &&str.match(/(\-)/g).length ==2)||
       //one dash in the correct location
       (str[str.length-5] =="-" && str.match(/(\-)/g).length ==1)){
      return phoneNumCorrect(str);
	}else
      return false;
  }else
    return false;  
}