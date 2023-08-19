document.getElementById("demo").innerHTML = dec2bin(-5);
function dec2bin(dec){
  return (dec >>> 0).toString(2);
}