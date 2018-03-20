//sums all the odd fibonacci numbers that are than or equal to num
function sumFibs(num) {
  var current =1;
  var last=1;
  var sum=2;
  
  
  if (num ==1){
    return 1;
  }if(num==2){
    return 2;
  }else{
    while(current<=num){
      current = current+last;
      last = current-last;
      if((current % 2) ==1 && (current<=num))
        sum = sum + current;
    }
  }
  
  
  return sum;
}
