//encodes a string with rot13 encoding 
function rot13(str) {
  var output="";
  for(var i =0; i<str.length;i++){ //loops for length of string 
    if(str[i]>= "A" && str[i]<= "Z"){//make sure char is a part of alphabet
      if(str[i]>="N") //rot13 subtracts if above M
        output += String.fromCharCode(str.charCodeAt(i)-13);
      else //rot13 adds if below M
        output += String.fromCharCode(str.charCodeAt(i)+13);
    }else //non-alphabet characters are not changed
      output += str[i];//pushes non alphabet characters through
  }
  return output;
}
