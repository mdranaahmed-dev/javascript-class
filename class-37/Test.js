let a = "sakib";

for (let x of a) {
  document.write(x);
  console.log(x);
}

//for loop
var i;
for (i=0; i<3; i=i+1) {
  document.write(i+"Hello Bangladesh <br>")
}

//while loop

var i=0;
while (i<3) {
  document.write(i+"While loop in <br>")
  i=i+1;
}
//do while loop
var i=0;
do {
  document.write(i+"<button>while loop</button> <br>");
  i=i+1
}while(i<3)

function addTwoNumber()  {
  var nam1 = 20;
  var nam2 = 30;
  var nam3 = nam1 + nam2;
  document.write(nam3+"<br>");
}

//peramitar pase kora
addTwoNumber()
function addNumber(num1,num2)  {
  var num3 = num1 + num2;
  document.write(num3+"<br>");
}
addNumber(12, 30);

function writeName (name) {
  document.write(name+"<br>");
}
writeName("rana");
writeName("sojib");
writeName("sagor");
writeName("sabbir");

