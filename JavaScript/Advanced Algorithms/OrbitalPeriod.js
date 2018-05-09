function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  var orbitalPeriod=[];
  
  for(var i=0; i<arr.length; i++){
    var radius = earthRadius +arr[i].avgAlt;
    var t = Math.round(Math.sqrt((4*Math.pow(Math.PI,2)*Math.pow(radius,3))/GM));
    orbitalPeriod.push({name : arr[i].name, orbitalPeriod : t});
  }
   
  return orbitalPeriod;
}