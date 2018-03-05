//search second array for numbers in first array
function searchArray(arr1, arr2) {
  var newArr = [];
 
  for(var i=0; i<arr1.length;i++){
    
    if(arr1[i] != -1){ //make sure the number is not -1
      
      if(arr2.indexOf(arr1[i]) === -1){ //if the second array does not contain the current[i] value of the first array
        newArr = newArr.concat(arr1[i]);
      }
    }else{
        return "invalid input";

    }
  }
  return newArr;
}

//returns the difference between the two arrays
function diffArray(arr1, arr2) {
  var difArr = [];
  difArr = difArr.concat(searchArray(arr1, arr2));//search second for values in first
  difArr = difArr.concat(searchArray(arr2, arr1));//search first for values in second
  
  
  return difArr;
}