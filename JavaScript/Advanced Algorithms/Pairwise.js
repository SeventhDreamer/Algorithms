function pairwise(arr, arg) {
 
  var sumOfIndices =0;
  var usedIndices=[];
  for(var i=0; i< arr.length-1; i++){
    for(var j=i+1; j< arr.length; j++){
      if (arr[i]+arr[j] == arg && usedIndices.indexOf(i) ==-1 && usedIndices.indexOf(j) ==-1 ){
        sumOfIndices += i+j;
        usedIndices.push(i);
        usedIndices.push(j);
      }
    }
  }
 
  return sumOfIndices;
}
