var v = new Date ();
document.getElementById("demo").innerHTML = v.getHours();

var d = new Date ();
document.getElementById("demo2").innerHTML = d.getMinutes();

var d = new Date("2023-7");
document.getElementById("demo").innerHTML = d.getSeconds();

const f = new Date("2023");
document.write(f + "<br>");

const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

const g = new Date();
let day = days[d.getDay()];
document.getElementById("demo4").innerHTML = day;
