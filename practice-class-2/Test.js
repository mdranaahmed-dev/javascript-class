let a = "Practic Class";
document.write(a + "<br>");

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

const phon = {
    name: "I Phone",
    color: "Gold",
    model: "14 Pro Max",
    Weight: "200kg",
    height: "7.2 Enchi",

    off:function () {
        console.log("The Phone has off");
    },
    on:function() {
        console.log("the phon is on");
    }
}

document.write(phon.name + "<br>");
document.write(phon.model + "<br>");
document.write(phon.Weight + "<br>");
document.write(phon.height + "<br>");

console.log(phon.color);
phon.off();

const fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo5").innerHTML = fruits.join(" * ");

const apple = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo6").innerHTML = apple.join(" = ");

const mango = ["Banana", "Orange", "Apple", "Mango"];
document.write(mango);
mango.join(" = ");
document.write(mango);
console.log(mango.join(" * "));






