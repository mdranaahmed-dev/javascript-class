
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

var i;
for(i=0; i<10; i=i+1) {

  if (i==5 || i==8) {
    continue; 
  }
  document.write(i+"<button>Sing in</button>");
}

var b;

for (b=0; b<10; b=b+1) {

  if (b===3) {
    break;
  }
  document.write(b+"HELLO");
}

var k;
for (k=0; k<8; k=k+2) {
  document.write("I Love bangladesh <br>");

}

const c = ["Hello", "Hi", "Good"];
document.write(c);
