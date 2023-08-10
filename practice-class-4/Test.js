function userInfom (userName, userId) {
    return chekUserInfom(userName, userId);
}

function chekUserInfom (userName, userId) {
    if (userName == 2580 && userId >= 12){
        return true;
    }
    return false;
}

if (userInfom(2580, 12)){
    alert("Registiosin Sucesfull");
}else("Registiosin faild");

let car = [ 'BMW', 'MARCITIS', 'CMW', 'CAR'];

for (var item in car) {
    document.write(car[item]+"<br>");
}

var i;
for (i = 0; i<20; i++){
    document.write("Hello Bangladesh </br>");
}

var i=0;
while (i<3) {
  document.write("While loop in <br>")
  i=i+1;
}


