function sumIt(sum, num){
  return sum+num;
}

function isPrime(num){
  for(var i=2;i<num; i++){
    if(num % i ==0){
      return false;
    }
  }
  return num !=1;
}

function sumPrimes(num) {
  primes =[];
  if(num ==2){
    return 2;
  }else{
    for(var i=2; i<=num;i++){
      if(isPrime(i)){
        primes.push(i);
      }
    }
  }
  
  var sum = primes.reduce(sumIt);
  return sum;
}