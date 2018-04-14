function checkCashRegister(price, cash, cid) {
  var change = cash -price;
  var cashDrawerValue = cid[0][1] + cid[1][1] + cid[2][1] + cid[3][1] +
      cid[4][1] + cid[5][1] + cid[6][1] + cid[7][1] + cid[8][1];
  
  var values = [0.01,0.05,0.1,0.25,1,5,10,20,100];
  var mcid = cid;
  
  var changeInCash =[];
  
  if(Number((cashDrawerValue).toFixed(2)) == change)
    return "Closed";
  else if(Number((cashDrawerValue).toFixed(2)) < change)
    return "Insufficient Funds";
  else if(Number((cashDrawerValue).toFixed(2)) > change){
    for(var i=8; i>=0; i--){ //loops for all nine cash denominations
      var first =true;
      while(values[i] <= change && mcid[i][1] !=0 && change >=0){//pulls out the right amount of cash
        if(first ==true){
          changeInCash.push([cid[i][0],values[i]]);
          change -= values[i];
          mcid[i][1] -= values[i];
          first =false;
        }else{
          changeInCash[changeInCash.length-1][1] += values[i];
          change -= values[i];
          mcid[i][1] -= values[i];
        }  
      }
    }
  }
  
  //fix floating point error
  if (change > 0.009 && change < 0.01){
    changeInCash[changeInCash.length-1][1] += 0.01;
    change = 0;
  }
    
  
  if (change == 0)
    return  changeInCash;
  else
    return "Insufficient Funds";
}