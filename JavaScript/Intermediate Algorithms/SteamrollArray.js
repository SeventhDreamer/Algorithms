//un-nest all sub arrays into a single level array
function steamrollArray(arr) {
  var output=[];
  
  for(var i=0; i<arr.length; i++){
    if(Array.isArray(arr[i]))
      output =output.concat(steamrollArray(arr[i]));
    else
      output.push(arr[i]);
  }
  
  return output;
}