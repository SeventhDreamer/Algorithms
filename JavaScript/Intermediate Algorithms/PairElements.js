function pairElement(str) {
  var output =[];
  for(var i=0; i<str.length; i++){
    if(str[i]=="C"){
      output.push(["C","G"]);
    }else if(str[i]=="G"){
      output.push(["G","C"]);
    }else if(str[i]=="T"){
      output.push(["T","A"]);
    }else if(str[i]=="A"){
      output.push(["A","T"]);
    }
  }
  return output;
}