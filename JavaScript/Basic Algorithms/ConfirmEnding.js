//tests the ending of a string for another string
function confirmEnding(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor
  if (str.substr(-target.length) == target) //takes the end of the str and compares it to the test string
    return true;
  else
    return false;
}