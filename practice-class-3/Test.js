let name = prompt("Your Name Plz");
let age = prompt ("Your Age Plz");
let skill = prompt ("You skill Plz");

alert("Hi do yyou want know");
confirm("Are You sure");
console.log(`Hi My Name is ${name} I am ${age} old I am a ${skill} dev`);

//fon in loop
let frout =["Apple", "bannana","Mango","orang"];

for(var item in frout){
    document.write(frout[item]+"<br>");
}

//for loop 
var i;
for (i=0; i<=10; i++){
    document.write("I love javascript <br>");
}

const car = {
    nam: "BMW",
    color: "red",
    model: 1220,
    weight: "1200kg",

    start: function () {
        console.log("car has start");
    }
}
console.log(car.nam);
car.start;

let nam = prompt ("Name plz ?");
let ag = prompt ("Age Plz ?");

console.log (`
    Hi My name is ${nam}
    old ${ag}
`)





