function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
  // Only change code below this line
  var lookingFor = Object.keys(source); //setup array of the keys we are looking for
  arr = collection.filter(function (item){ //filters based on following criteria
    for(var i=0; i<lookingFor.length; i++){ //loops for each key we need to test
      //if the key of the item is not present or the item does not match the source then it is kicked out
      if(!item.hasOwnProperty(lookingFor[i]) || item[lookingFor[i]] !== source[lookingFor[i]])
        return false;
    }
    return true; //both the keys and the item values match
  });
  // Only change code above this line
  return arr;
}