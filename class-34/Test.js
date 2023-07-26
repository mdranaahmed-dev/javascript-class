let age = 18;

if (age < 18) {
  console.log("You are young!");
} else if (age == 18){
  console.log("Welcom adult!");
} else if (age < 18 && age < 30){
  console.log("You are matured!");
}else {
  console.log("You are older!");
}

let day;
switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case  6:
    day = "Saturday";
}
document.getElementById("demo5").innerHTML = "Today is " + day;

let month;
switch (new Date().getDay()){
  case 0:
  month = "Janu";
  break;
  case 1:
  month = "Feb";
  break;
};

document.getElementById("demo6").innerHTML = "Today is " + day;