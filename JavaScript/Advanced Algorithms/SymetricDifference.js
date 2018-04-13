
//search second array for numbers in first array
//if they are not found the number from the first array is added to the output
function returnUniques(arr1, arr2) {
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

//find the symmetric difference between two arrays
function difference(arr1, arr2){
  var difArr = [];
  difArr = difArr.concat(returnUniques(arr1, arr2));//search first for values not in second
  difArr = difArr.concat(returnUniques(arr2, arr1));//search second for values not in first
  return difArr;
}

//remove numbers that appear multiple times
function deDupe(arr){
  var output=[];
  for(var j=0; j<arr.length; j++){
     if(arr[j]  !== arr[j+1] ){
       output.push(arr[j]);
     }
   }
  return output;
}

//returns the symmetric difference between the  arrays
function sym(args) {

  
  var output = difference(arguments[0], arguments[1]);
  
  //loop for all arrays
  for (var i=2; i<arguments.length;i++){
      output = difference(arguments[i], output);
  }
  
  output = deDupe(output);
  
  return output;
}