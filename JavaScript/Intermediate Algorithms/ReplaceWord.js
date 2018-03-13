function replaceWord(str, before, after) {
  
  function checkForUpper(match){
    var out = "";
    if (match.charAt(0) === match.charAt(0).toUpperCase()){//check fgr uppercase word
       out = after.charAt(0).toUpperCase();//start replacement with upper case
    }
    else{
      out = after.charAt(0).toLowerCase();//start replacement with lower case
    }
    out += after.slice(1);//add the rest of the word
    return out;
  }
  
  var output = str.replace(before, checkForUpper);
  return output;
}