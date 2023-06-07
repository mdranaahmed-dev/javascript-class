
const Frouts = ["Aplle","Bannana", "Orang", "Paynaple"]; // Array
document.getElementById("demo").innerHTML = Frouts.join(" * ");

console.log(Frouts.join(" * "));

console.log(Frouts.pop());

let a = Frouts.shift();
console.log(a);
document.write(a);

let b = Frouts.unshift("Lemon");

Frouts[2] = "Coconat";
 
document.write(b);

const furts = ["Dalim", "Piyara", "Jam", "Lichu"]; // Array
delete furts[0];
document.write(furts);

const names = ["Rana", "Sabbir", "Shahabuddin"]; // Array
names.splice(1, 0, "Kamal", "Jamal");
document.write(names);

function addTowNumber (num1, num2) {
    var num3 = num1+num2;
    document.write(num3+"<br>");
}
addTowNumber(29, 29);
addTowNumber(9, 29);
addTowNumber(20, 29);

function MyName (num) {
    document.write(num);  //peramitar pas kora 
}
MyName("Kamal");
MyName("Jamal");
MyName("Salam");
MyName("Saddak");

function MyFunction () {

}
