
try {
    let num = 1;
    try {
      num.toPrecision(500);
    }
    catch(err) {
      document.getElementById("demo").innerHTML = err.name;
    }
} catch (errow) {
    document.write(errow + "<br>")
}

try {
    eval("alert('Hello)");
  }
  catch(err) {
    document.write(err + "<br>");
  }

  try {
    num.toUpperCase();
  }
  catch(err) {
    document.write(err + "<br>");
  }

  try {
    decodeURI("%%%");
  }
  catch(err) { 
    document.write(err + "<br>");
  }