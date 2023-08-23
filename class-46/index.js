let text = "Visit W3Schools!"; 
let n = text.search("W3Schools");
document.getElementById("demo").innerHTML = n;

let tex = document.getElementById("demo2").innerHTML;
document.getElementById("demo2").innerHTML =
tex.replace(/microsoft/i, "W3Schools");

var i = "Visit W3Schools";
var result = i.match(/w3schools/i);
document.getElementById("demo").innerHTML = result;