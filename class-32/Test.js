let x = false;         // x is a Boolean
let y = new Boolean(false);  // y is an object
document.getElementById("demo").innerHTML = (x===y);


let s = 10 / "Hello";
document.getElementById("demo").innerHTML = Boolean(s);

const text = ["ALRISLAIERFVNEIUSEIUG9"];
console.log(text.sort());

const student  = ["Akash", "Niloy","Rana","Abir", "Mihad", "Shahabuddin",];
console.log(student.sort());

document.getElementById("demo").innerHTML =
Math.floor(Math.random() * 10);

document.getElementById("demo2").innerHTML =
Math.floor(Math.random() * 100);

document.getElementById("demo3").innerHTML =
Math.floor(Math.random() * 10) + 1;

document.getElementById("demo4").innerHTML = Math.random();

document.write(Math.random());

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}
console.log(getRandomNumber(1, 6));

function random__number(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(random__number(1, 20));

const rana  = ["Akash", "Niloy","Rana","Abir", "Mihad", "Shahabuddin",];
console.log(rana.sort());
console.log(rana.sort());
console.log(rana.sort());
console.log(random__number(1,9));

const roll_number = [4,2,1,6,8,40,30,22,9];

console.log(roll_number.sort(function(a, b){
    return b-a;
}));
console.log(roll_number.sort());

