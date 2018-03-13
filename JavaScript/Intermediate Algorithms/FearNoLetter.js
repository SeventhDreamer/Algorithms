function fearNotLetter(str) {
  var missingChar;
  for(var i=1; i<str.length; i++){
    if(str.charCodeAt(i-1) !== (str.charCodeAt(i)-1)){
      missingChar = String.fromCharCode(str.charCodeAt(i)-1);
    }
  }
  
  return missingChar;
}