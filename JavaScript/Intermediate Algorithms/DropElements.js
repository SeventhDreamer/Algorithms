function dropElements(arr, func) {
  var index = arr.findIndex(func);
  if(index ==-1){
    return [];
  }else{
    return arr.slice(index);
  }
}