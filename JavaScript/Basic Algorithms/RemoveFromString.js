
var RemovingNow; 
function removeThis(arr){
  if(arr == RemovingNow)
    return false;
  else
    return true;
}

function destroyer(arr) {
  var toBeFiltered = arguments[0]; //string we will filter
 
  for(var i=1;i<arguments.length;i++){//loops for the number of things to be removed
    RemovingNow = arguments[i];//what needs to removed 
    toBeFiltered = toBeFiltered.filter(removeThis); //filters out the current filter item
  }
     
  return toBeFiltered;
}