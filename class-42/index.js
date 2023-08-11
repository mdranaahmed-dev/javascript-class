// Create a Map
const fruits = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
  ]);
  
document.write(fruits.size);

// Create a Map
const fruit = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200],
  ["Paynapel", 500],
  ["Malta", 300],
  ["Dragon", 200]
]);

let text = "";
fruit.forEach (function(value, key) {
  text += key + ' = ' + value + "<br>"
})

document.getElementById("demo").innerHTML = text;

