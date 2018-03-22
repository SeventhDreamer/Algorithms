function addTogether() {
  //handles one or more arguments
  if(arguments.length >1){
    if(typeof(arguments[0]) != "number" || typeof(arguments[1]) != "number"){
      return undefined;
    }else{
      return arguments[0] + arguments[1];
    }
    //handles only one parameter being passed in
  }else{
    if(typeof(arguments[0]) != "number"){
      return undefined;
    }else{
      var firstArg = arguments[0];
      return function(n) {
        if(typeof(n) == "number"){
          return n + firstArg;
        }else{
          return undefined;
        }
        
      };
    }
  }
}