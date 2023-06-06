
const Frouts = ["Aplle","Bannana", "Orang", "Paynaple"];
document.getElementById("demo").innerHTML = Frouts.join(" * ");

console.log(Frouts.join(" * "));

console.log(Frouts.pop());

let a = Frouts.shift();
console.log(a);
document.write(a);

let b = Frouts.unshift("Lemon");

Frouts[2] = "Coconat";
 
document.write(b);

const furts = ["Dalim", "Piyara", "Jam", "Lichu"];
delete furts[0];
document.write(furts);

const names = ["Rana", "Sabbir", "Shahabuddin"];
names.splice(1, 0, "Kamal", "Jamal");
document.write(names);
