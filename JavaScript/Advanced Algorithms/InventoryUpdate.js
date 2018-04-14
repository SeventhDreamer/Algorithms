function updateInventory(arr1, arr2) {
  var output = arr1;
  
  for(var i=0; i<arr2.length; i++){ //loops for items to be added
    
    var found = false;
    
    var j =0;
    while(!found && j < output.length){//adds inventory if the item already exists
      if(arr2[i][1] == output[j][1]){
        output[j][0] += arr2[i][0];
        found = true;
      }
      j++;
    }
    
    if(!found){
      //find where to insert
      for (var a = 0; a < output.length; a++) {
        if (output[a][1][0] > arr2[i][1][0] && !found){ //insert if location found
          output = output.slice(0, a).concat([arr2[i]].concat(output.slice(a, output.length)));
          found =true;
          
        }
      }
      if (!found){ //add to the end if no location found
          output.push(arr2[i]);
      }
    }
  }
  
    return output;
}