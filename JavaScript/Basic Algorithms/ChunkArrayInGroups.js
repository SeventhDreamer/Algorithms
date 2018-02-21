//takes in a string and integer
//outputs the string broken up into an array of integer size
function chunkArrayInGroups(arr, size) {
  var output=[];
  output.push(arr.slice(0,size)); //gets first slice because multiplying by 0 does not work
  for (var i =size; i<arr.length; i+=size){
    if(arr.length >= i+size) //makes sure the next chunk will not go beyond the array end
      output.push(arr.slice(i,i+size));
    else
      output.push(arr.slice(i,arr.length)); // gets the last chunk whatever size it should be
  }
  return output;
}
