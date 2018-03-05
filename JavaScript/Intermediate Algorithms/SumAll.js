
//sums the two numbers in the passed in array and all the numbers between them
function sumAll(arr) {
  var min =  Math.min.apply(null,arr);
  var max =  Math.max.apply(null,arr);
  
  var sum=0;
  
  for(var i= min; i<=max; i++){
    sum += i;
  }
  
  return sum;
}