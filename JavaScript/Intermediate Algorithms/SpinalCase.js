function spinalCase(str) {
  var output =str;
  
  output = output.replace(/[\_]/g, '-'); //replace underscores with dashes
  
  output = output.replace(/(\w)[A-Z]/g, 
  function(f) {return String.prototype.concat(f[0],"-", f[1]);});//insert dashes before camel case words
  
  output = output.replace(/[\s]/g, '-'); //replace spaces with dashes

  return output.toLowerCase;
}