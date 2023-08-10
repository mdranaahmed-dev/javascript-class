//for in loop object
var pason = {
  name: "Rana",
  age: "20",
  hight: "5feet"
}
for (var item in pason ) {
  document.write(pason[item]+"<br>");
}

var i; 
for(i=0; i<10; i++){
  document.write("My name Is Rana <br>");
}

var i= 0;
do{
  i++;
  document.write("Helo<br>")
 }while(i<3)

 var i = 0;
 while(i<30){
  document.write("Whil lopp <br>");
  i++;
 }

 var frout = ["Mango","Apple", "Bannana", "paynapel"];
 for (var item in frout){
  document.write(frout[item]+"<br>");
 }

let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
document.write(text.slice(4,23));

//function return
function MyFunctio(b)  {
  let text = ["aplle", "hello", "MIMi"];
  document.write(text);
}

function loginFrom(id, age) {
  return chekid(id, age);
}

function chekid (id, age) {
  if (id == '12345' && age >= 18) {
    return true;
  }
  return false;
}

if (loginFrom("12345", 18)) {
  alert("Registraion Sucessfully");
}else ("Registraion Failed");
 

function custonerLOginFrom(customerId, customerName) {
  return chekCustomerId (customerId, customerName);
}

function chekCustomerId (customerId, customerName) {
  if (customerId == 12345 && customerName  >=50){
    return true;
  }
  return false;
}

if (custonerLOginFrom(12345, 50)){
  alert("Registraion Sucessfully")
}else("Registraion Failed");
