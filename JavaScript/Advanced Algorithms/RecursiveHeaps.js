function generatePermutations(num, arr){
  var permutations =[];
  var marr = arr;
    if(num == 1){
        console.log(num);
        permutations.push(marr.join(''));
    }else{
        for(var i = 0; i < num - 1; i++){
            permutations = permutations.concat(generatePermutations(num - 1, marr));
			var temp ="";
            if (num%2 ==0){
				temp = marr[i];
				marr[i] = marr[num-1];
				marr[num-1] = temp;
            }else{
				temp = marr[0];
				marr[0] = marr[num-1];
				marr[num-1] = temp;
            }
        }
        permutations = permutations.concat(generatePermutations(num - 1, marr));
	}
	return permutations;
}

function permAlone(str) {  
  var perms = generatePermutations(str.length, str.split(''));
  
  //remove all permutations with repeated consecutive letters
  var noReps = perms.filter(function test(val){ 
    return ! /(.)\1{1,}/g.test(val);
                                              });
  
  return noReps.length;
}