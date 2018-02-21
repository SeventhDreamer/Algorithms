//captializes the first letter of each word in a string
function titleCase(str) {
  var words = str.toLowerCase();//makes all characters lower case
  //regex explanation (^|\s) selects for begining of string and after white space
  //[a-z] selects for first character
  words =words.replace(/(^|\s)[a-z]/g, function(f) {return f.toUpperCase();});
  return words;
}