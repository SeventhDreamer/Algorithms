function truthCheck(collection, pre) {
  var truth = true;
  for(var i=0; i<collection.length;i++){
    if(!collection[i][pre])
      truth=false;
  }
  return truth;
}