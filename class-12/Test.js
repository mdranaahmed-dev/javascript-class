function sleep(name, time) {
    console.log( name + "is sleeping at" + time);
}

sleep("Rohim", "10 PM");
sleep("Kamal", "11 PM");
sleep("korim", "12 PM");

function toCelsius(f) {
    return (5/9) * (f-32);
  }
  
  let value = toCelsius(77);
  document.getElementById("demo").innerHTML = value;