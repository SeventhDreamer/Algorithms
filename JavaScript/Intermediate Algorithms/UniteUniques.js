//takes in an unkown number of integer arrays and returns the unified and unsorted uniques in a single array
function uniteUnique(arr) {
  var output = arguments[0];  //holds the first array, it will always be the all in
  
  //checks if the item is already in the output array
  function alreadyContained(item){
    if(output.indexOf(item) == -1){
      return true;
    }else{
      return false;
    }
  }

  //loops for for all arguments
  for(var i=1;i<arguments.length;i++){
    //adds new items that pass the filter to the output array
    output = output.concat(arguments[i].filter(alreadyContained));
  }
  return output;
}