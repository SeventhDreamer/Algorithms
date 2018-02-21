function palindrome(str) {
  var isPalindrome=true;//we assume it is a palindrome untill proven otherwise
  str = str.toLowerCase();//makes all characters lower case
  str = str.replace(/[^a-z0-9]/g,'');//removes non alpha numeric characters
  
  for(var i= 0; i < Math.floor(str.length/2);i++){//loops for half the length of the string
    if(str[i] != str[str.length-i-1])//compares chars from the edges to the center
      isPalindrome = false;//if the pairs of chars do not match then it is not a palindrome
  }
  return isPalindrome;
}