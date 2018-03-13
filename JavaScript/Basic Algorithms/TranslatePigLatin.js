function translatePigLatin(str) {
  var words = str.split(" ");
  var output = "";
  
  for (var i=0; i<words.length; i++){//loops for each word in the string
    //tests for (^|\s) begining of word after white space
    // [b-df-hj-np-tv-z] is it a consonant? and {2} check for two consonants in a row
    if(/(^|\s)[b-df-hj-np-tv-z]{2}/.test(words[i])){//handles double consonants
      words[i] = words[i].slice(2) + words[i].slice(0,2) + "ay";
    }else if(/[b-df-hj-np-tv-z]/.test(words[i][0])){ //handles single consonants
      words[i] = words[i].slice(1) + words[i][0] + "ay";
    }else{ //handles vowels
      words[i] = words[i] + "way";
    }
  }
  output = words.join(' '); //put the sentence back together
  return output;
}