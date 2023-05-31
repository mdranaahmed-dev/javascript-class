document.write("Hello Bangladesh");
window.alert("hello");
document.getElementById("demo").innerHTML ="I Love BAngladesh";

let x = "Heelo javascript";
console.log(x);

let y = "My Name is Rana";
console.log(y.length);

var v = 6;
console.log(v);

var t = "Rana";
console.log(t);

const car = {
    Name: "BMW",
    Model: 153,
    Wegit: "1500kg",
    Color: "blu",
    start:function() {
     console.log("car has start");   
    },

    driv:function() {
     console.log("car has driv");   
    },
    
};

console.log(car.Name);
car.start();
car.driv();


function toCelsius(f) {
    return (5/9) * (f-32); 
};
let value = toCelsius;
document.getElementById("demo2").innerHTML = value;

document.querySelector("x").innerHTML;




