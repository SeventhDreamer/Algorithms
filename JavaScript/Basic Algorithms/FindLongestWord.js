function findLongestWord(str) {
  var words = str.split(" ");//creates array of words
  var longestWord =0;//longest word
  
  for(var i=0; i < words.length; i++)//loops for all words
    if(words[i].length >= words[longestWord].length)//checks for longer word
      longestWord = i;//sets longest so far word
   return words[longestWord].length;
}