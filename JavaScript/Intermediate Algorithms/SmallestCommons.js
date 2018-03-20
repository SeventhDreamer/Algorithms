//find the smallest common multiple that is also 
//evenly divisable by all the numbers between the first two
function smallestCommons(arr) {
  
  //sort in descending order
  arr.sort(function(a, b) {
  return b-a;
  });
  
  //build array of all numbers that need to divide evenly
  var arrayComplete = [];
  for (var i=arr[1]; i<= arr[0];i++){
    arrayComplete.push(i);
  }
  
  var found =false;
  var multiplier =2;
  var multiple;
  
  while(!found){
    multiple = arr[0] *multiplier;
    //test the current multiple for even devision
    for(var j=0; j<arrayComplete.length; j++){
      if(multiple%arrayComplete[j] !==0){
        break;
      } else if(j == arrayComplete.length-1)
        found =true;
    }
    multiplier += 1;
  }
  return multiple;
}