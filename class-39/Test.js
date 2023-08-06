var i;

for (i=0; i<=10; i++) {
  console.log(i+"Hello bangladesh <br>");
}

let text = "";
for (let i = 0; i < 10; i++) {
  if (i === 3) { break; }
  text += "The number is " + i + "<br>";
  document.write(text);
}

var number ="";
for (i=0; i<10; i++) {
  if (i===4) {break}
  document.write(number+"hllo <br>");
}
let tex = "";
for (let i = 0; i < 30; i++) {
  if (i === 3) { continue; }
  tex += "The number is " + i + "<br>";
  document.write(tex);
}