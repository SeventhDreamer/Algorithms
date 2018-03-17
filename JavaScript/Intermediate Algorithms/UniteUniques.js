//takes in an unknown number of integer arrays and returns the unified and unsorted uniques in a single array
function uniteUnique(arr) {
  var output = arguments[0];  //adds the first array, it will always be the all in
  
  //checks if the item is already in the output array
  function alreadyContained(item){
    return output.indexOf(item) == -1;
  }

  for(var i=1;i<arguments.length;i++){
    //adds new items that pass the filter to the output array
    output = output.concat(arguments[i].filter(alreadyContained));
  }
  return output;
}