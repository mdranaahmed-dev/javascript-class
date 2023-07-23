let x = 5;
document.getElementById("demo").innerHTML = (x == 8);
let y = 5;
document.getElementById("demo2").innerHTML = (y === 5);

let d = 5;
document.getElementById("demo3").innerHTML = (d != 8);

function myFunction() {
    let voteable;
    let age = Number(document.getElementById("age").value);
    if (isNaN(age)) {
      voteable = "Input is not a number";
    } else {
      voteable = (age < 18) ? "Too young" : "Old enough";
    }
    document.getElementById("demo4").innerHTML = voteable + " to vote";
  }