//takes in string and integer that defines the desired length of the string
//outputs truncated string
function truncateString(str, num) {
  var output= "";
  if(num>3 && str.length >num){//handles string longer than 3
    output = str.substr(0,num-3) +"...";
  }else if(str.length >num){//handles string shorter than 3
    output = str.substr(0,num) +"...";
  }else{//handles no truncation
    output = str;
  }
  return output;
}