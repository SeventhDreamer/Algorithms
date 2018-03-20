//convert symbols to html entities
function convertHTML(str) {
  var output = str;
  
  output = output.replace(/[&]/g, "&amp;");
  output = output.replace(/[<]/g, "&lt;");
  output = output.replace(/[>]/g, "&gt;");
  output = output.replace(/["]/g, "&quot;");
  output = output.replace(/[']/g, "&apos;");
    
  return output;
}