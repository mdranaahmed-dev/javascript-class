let a = "Practic Class";
document.write(a);

let b = "Hello Bnagladesh";
document.getElementById("demo").innerHTML = b;

var x = 40;
var y = 60;
document.getElementById("demo2").innerHTML = x + y ;
console.log(x + y);

const car = {
    color: "white",
    Moder: "BMW",
    Weight: "1400kg",

    start: function () {
        console.log("Car has started");
    },

};

document.getElementById("demo3").innerHTML = car.color;
document.getElementById("demo4").innerHTML = car.Moder;

console.log(car.color);
car.start();






