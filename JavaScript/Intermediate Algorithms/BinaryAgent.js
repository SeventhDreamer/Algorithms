function binaryAgent(str) {
  var letters = str.split(" ");
  var output ="";
  
  for(var i=0; i<letters.length; i++){
    output =output.concat(String.fromCharCode(parseInt(letters[i],2)));
  }
  return output;
}