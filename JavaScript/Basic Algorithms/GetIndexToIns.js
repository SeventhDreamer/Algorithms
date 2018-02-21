function compareNumbers(a, b) {
  return a - b;
}

//returns the index to insert a new value into a sorted array
function getIndexToIns(arr, num) {
  // Find my place in this sorted array.
  placeFound = false;
  place = 0;
  arr.sort(compareNumbers);
  
  var i=0;
  while(placeFound==false){
    if(arr[i]>=num){//checks for larger number
       place = i;
      placeFound = true;
    }else if(i==arr.length-1){//handles hitting the end of the array
      place = i+1;
      placeFound = true;
    }
    i++;
  }
  return place;
}
