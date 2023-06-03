let y = 9560000000000;
console.log(y.toExponential(2));

let x = 123;

document.getElementById("demo").innerHTML = 
  x.valueOf() + "<br>" +
  (123).valueOf() + "<br>" +
  (100 + 23).valueOf();

  document.getElementById("demo2").innerHTML = 
  parseInt("-10") + "<br>" +
  parseInt("-10.33") + "<br>" +
  parseInt("10") + "<br>" +
  parseInt("10.33") + "<br>" +
  parseInt("10 6") + "<br>" +  
  parseInt("10 years") + "<br>" +  
  parseInt("years 10");  

  document.getElementById("demo3").innerHTML = 
  parseFloat("10") + "<br>" +
  parseFloat("10.33");