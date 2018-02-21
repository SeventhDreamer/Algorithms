//takes in an array of two strings
//checks if all the characters of the second string are contained in the first string
function containedWithin(arr) {
  //get everything to thesame case
  arr[0] = arr[0].toUpperCase();
  arr[1] = arr[1].toUpperCase();
  
  var containedWithin=true;
  for(var i=0; i <arr[1].length;i++){//loops through characters of second string
    if(arr[0].indexOf(arr[1][i]) == -1)//checks if current character is not found
      containedWithin=false;
  }
  return containedWithin;
}