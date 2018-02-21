function removeFromFront(arr, howMany) {
  //removes the front howMany of characters from the string  
  var output = arr.slice(howMany,arr.length);
  return output;
}