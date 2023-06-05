
const car = ["Sabbir", "Menu", "Name"];
car [0] = "Rana";
car [10] = "Sabbir";
console.log(car[0]);
console.log(car[10]);
document.getElementById("demo").innerHTML = car[0];
document.getElementById("demo2").innerHTML = car;

console.log(typeof car);

const Frout = ["Mango", "Bannana", "Apple", "Orang"];

for (i = 0; i < Frout.length; i++) {
  console.log(Frout[i]);
  document.getElementById("demo3").innerHTML = Frout;
};

const apple = ["Home", "About", "Privet", "BLog"];

function myFunction (rana) {
  document.getElementById("demo4").innerHTML = apple;
  console.log(rana);
}
apple.forEach(myFunction);

console.log("Finish");
